package course.ensf607.assignment6.Services;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

import course.ensf607.assignment6.Repos.CourseRepository;
import course.ensf607.assignment6.Entities.*;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CourseConfig {

    @Bean
    CommandLineRunner commandLineRunner2(CourseRepository repository) {
        return args -> {
            Course ensf593 = new Course(1L, "ENSF593", LocalDate.parse("2022-07-02"), LocalDate.parse("2022-08-20"), 60,
                    false, null);
            Course ensf594 = new Course(2L, "ENSF594", LocalDate.parse("2022-07-02"), LocalDate.parse("2022-08-20"), 60,
                    false, null);
            Course ensf608 = new Course(3L, "ENSF608", LocalDate.parse("2022-09-04"), LocalDate.parse("2022-12-10"), 60,
                    true, null);
            Course ensf611 = new Course(4L, "ENSF511", LocalDate.parse("2022-09-04"), LocalDate.parse("2022-12-10"), 60,
                    true, null);

            // Course ensf611 = new Course("ENSF611");
            // Course ensf612 = new Course("ENSF612");
            // Course ensf614 = new Course("ENSF614");
            // Course ensf613 = new Course("ENSF613");

            repository.saveAll(List.of(ensf593, ensf594, ensf608, ensf611));

        };
    }
}