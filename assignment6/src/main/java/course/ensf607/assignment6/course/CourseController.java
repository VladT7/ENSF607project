package course.ensf607.assignment6.course;

import course.ensf607.assignment6.student.Student;
import course.ensf607.assignment6.student.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@CrossOrigin
@RestController
@RequestMapping(path = "api/v1/course")
public class CourseController {

    private final CourseService courseService;

    private final StudentService studentService;

    @Autowired
    public CourseController(CourseService courseService, StudentService studentService) {
        this.courseService = courseService;
        this.studentService = studentService;
    }

    @GetMapping
    public List<Course> getAllCourses() {
        return courseService.getAllCourses();
    }

    @GetMapping("{courseName}")
    public Course searchCourseByName(@PathVariable String courseName) {
        return courseService.getCourseByName(courseName);
    }

    @PostMapping
    public Course registerNewCourse(@RequestBody Course course) {
        courseService.addNewCourse(course);
        return course;
    }

    @PutMapping("{courseName}/students/{studentUcid}")
    public Course enrollStudentToCourse(@PathVariable String courseName,
            @PathVariable String studentUcid) {
        Course course = courseService.getCourseByName(courseName);
        Student student = studentService.getStudentbyUcid(studentUcid);

        if (course.getHasPrerequisite()) {
            Set<Course> studentCourses = student.getSubjects();
            Set<Course> prereqsOfCourse = course.getPrerequisites();
            boolean meetsPrereq = studentCourses.containsAll(prereqsOfCourse);

            if (meetsPrereq) {
                course.enrolledStudents(student);
                courseService.updateCourse(course);
            } else {

                throw new IllegalStateException("You have not met the pre-requisites for this course.");
            }

        } else {
            course.enrolledStudents(student);
            courseService.updateCourse(course);
        }
        return course;
    }

    @GetMapping("student/{studentId}")
    public Set<Course> getCoursesTakenByStudent(Long studentId) {
        Student student = studentService.getStudentById(studentId);
        return student.getSubjects();
    }

    // new - current
    @DeleteMapping("{courseName}/students/{studentUcid}")
    public Course derollStudentFromCourse(@PathVariable String courseName,
            @PathVariable String studentUcid) {
        Course course = courseService.getCourseByName(courseName);
        Student student = studentService.getStudentbyUcid(studentUcid);

        Set<Student> temp = course.getEnrolledStudents();

        if (temp.contains(student)) {
            temp.remove(student);
            courseService.updateCourse(course);

        } else {

            throw new IllegalStateException("Student is not currently enrolled in the course");
        }

        return course;

    }

    @DeleteMapping("{courseName}")
    public void deleteCourse(@PathVariable String courseName) {
        courseService.removeCourse(courseName);
    }

    // @PutMapping("{courseId}/course/{preReqId}")
    @PutMapping("{courseName}/course/{prereqName}")
    public Course addPrerequisiteToCourse(@PathVariable String courseName,
            @PathVariable String prereqName) {
        // Course course = courseService.getCourseById(courseId);
        // Course prereqCourse = courseService.getCourseById(preReqId);
        Course course = courseService.getCourseByName(courseName);
        Course prereqCourse = courseService.getCourseByName(prereqName);

        if (course.equals(prereqCourse)) {
            throw new IllegalStateException("Course cannot be prerequisite of itself.");
        } else {
            course.prerequisites(prereqCourse);
            courseService.updateCourse(course);
        }

        return course;
    }
}
