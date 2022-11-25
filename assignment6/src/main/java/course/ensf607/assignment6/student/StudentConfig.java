package course.ensf607.assignment6.student;

import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class StudentConfig {

        @Bean
        CommandLineRunner commandLineRunner3(StudentRepository repository) {
                return args -> {
                        Student s1 = new Student("Tyson", "12343", "10171871", null);
                        Student s2 = new Student("Ayah", "qweret", "092134", null);

                        repository.saveAll(List.of(s1, s2));

                };
        }
}
