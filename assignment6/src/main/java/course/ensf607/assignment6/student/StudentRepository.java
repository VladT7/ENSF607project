package course.ensf607.assignment6.student;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository // this is reponcible for data access
public interface StudentRepository extends JpaRepository<Student, Long> {

    Optional<Student> findStudentByUcid(String ucid);

    Optional<Student> findStudentById(Long ucid);

}
