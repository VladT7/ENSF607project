package course.ensf607.assignment6.student;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

//service layer is responcible for business logic

@Service
public class StudentService {

    private final StudentRepository studentRepository;

    @Autowired
    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public List<Student> getAllStudents() {
        return studentRepository.findAll(); // findAll returns a list
    }

    public void addNewStudent(Student student) {
        Optional<Student> studentByUcid = studentRepository.findStudentByUcid(student.getUcid());
        if (studentByUcid.isPresent()) {
            throw new IllegalStateException("Student already exist!");
        }
        studentRepository.save(student);
    }

    public Student getStudentById(Long studentId) {
        Optional<Student> studentById = studentRepository.findById(studentId);
        if (!studentById.isPresent()) {
            throw new IllegalStateException("student doesn't exist!");
        }
        return studentById.get();
    }

    // new
    public Student getStudentbyUcid(String studentUcid) {
        Optional<Student> studentByUcid = studentRepository.findStudentByUcid(studentUcid);
        if (!studentByUcid.isPresent()) {
            throw new IllegalStateException("student Ucid doesn't exist -- new");
        }

        return studentByUcid.get();
    }
}
