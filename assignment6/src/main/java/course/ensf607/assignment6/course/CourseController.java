package course.ensf607.assignment6.course;

import course.ensf607.assignment6.student.Student;
import course.ensf607.assignment6.student.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

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

    // //new - works
    // @GetMapping("{courseId}")
    // public Course searchCourseById(@PathVariable Long courseId){
    // // Course course = courseService.getCourseById(courseId);

    // return courseService.getCourseById(courseId);

    // }

    // new - current
    @GetMapping("{courseName}")
    public Course searchCourseByName(@PathVariable String courseName) {
        return courseService.getCourseByName(courseName);
    }

    @PostMapping
    public void registerNewCourse(@RequestBody Course course) {
        courseService.addNewCourse(course);
    }

    // changed
    @PutMapping("{courseName}/students/{studentUcid}")
    public Course enrollStudentToCourse(@PathVariable String courseName,
            @PathVariable String studentUcid) {
        Course course = courseService.getCourseByName(courseName);
        Student student = studentService.getStudentbyUcid(studentUcid);

        // if(course.getHasPrerequisite()){
        // throw new IllegalStateException("this thing has a pre-req, test ");
        // }

        course.enrolledStudents(student);
        courseService.updateCourse(course);
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
        temp.remove(student);

        courseService.updateCourse(course);
        return course;

    }

    @PutMapping("{courseId}/course/{preReqId}")
    public void addPrerequisiteToCourse(@PathVariable Long courseId,
            @PathVariable Long preReqId) {
        Course course = courseService.getCourseById(courseId);
        Course prereqCourse = courseService.getCourseById(preReqId);
        course.prerequisites(prereqCourse);
        courseService.updateCourse(course);
        // return course;
    }
}
