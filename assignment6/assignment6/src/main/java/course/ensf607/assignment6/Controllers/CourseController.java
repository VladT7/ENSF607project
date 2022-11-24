package course.ensf607.assignment6.Controllers;

import course.ensf607.assignment6.Entities.Course;
import course.ensf607.assignment6.Entities.Student;
import course.ensf607.assignment6.Services.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @CrossOrigin
    @GetMapping
    public List<Course> getAllCourses() {
        return courseService.getAllCourses();
    }

    // if you post multiple times, you will repeat the method multiple times
    @PostMapping
    public void registerNewCourse(@RequestBody Course course) {
        courseService.addNewCourse(course);
    }

    // something can be only once
    @PutMapping("{courseId}/students/{studentId}")
    public Course enrollStudentToCourse(@PathVariable Long courseId,
            @PathVariable Long studentId) {
        Course course = courseService.getCourseById(courseId);
        Student student = studentService.getStudentById(studentId);
        course.enrolledStudents(student);
        courseService.updateCourse(course);
        return course;
    }

    @PutMapping("{courseId}/course/{preReqId}")
    public Course addPrerequisiteToCourse(@PathVariable Long courseId,
            @PathVariable Long preReqId) {
        Course course = courseService.getCourseById(courseId);
        Course prereqCourse = courseService.getCourseById(preReqId);
        course.prerequisites(prereqCourse);
        courseService.updateCourse(course);
        return course;
    }

}
