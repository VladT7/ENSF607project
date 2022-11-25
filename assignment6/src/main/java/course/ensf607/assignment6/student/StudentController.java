package course.ensf607.assignment6.student;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import course.ensf607.assignment6.course.Course;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping(path = "api/v1/student")
public class StudentController {

    private final StudentService studentService;

    @Autowired //studentService will be intantiated for us automatically
    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping
    public List<Student> getStudents() {
        return studentService.getAllStudents();
    }

    @PostMapping
    public void registerNewStudent(@RequestBody Student student) {
        studentService.addNewStudent(student);
    }

    @GetMapping("students/{studentUcid}")
    public List<String> getStudentEnrollments(@PathVariable String studentUcid) {
        Student selectedStudent = studentService.getStudentbyUcid(studentUcid);
        Set<Course> sectionList = selectedStudent.getSubjects();
        List<String> studentCourses = new ArrayList<String>();
        for (Course c : sectionList) {
            studentCourses.add(c.getName());
        }
        return studentCourses;
    }
}
