package course.ensf607.assignment6.course;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.List;

import java.util.Set;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CourseConfig {

        @Bean
        CommandLineRunner commandLineRunner2(CourseRepository repository) {
                return args -> {
                        Course ensf593 = new Course("ENSF593", LocalDate.parse("2022-07-02"),
                                        LocalDate.parse("2022-08-20"), 60,
                                        false, null, null);

                        Set<Course> ensf593Prereq = new HashSet<Course>();
                        ensf593Prereq.add(ensf593);

                        Course ensf594 = new Course("ENSF594", LocalDate.parse("2022-07-02"),
                                        LocalDate.parse("2022-08-20"), 60,
                                        true, null, ensf593Prereq);
                        Course ensf608 = new Course("ENSF608", LocalDate.parse("2022-09-04"),
                                        LocalDate.parse("2022-12-10"), 60,
                                        true, null, null);
                        Course ensf611 = new Course("ENSF611", LocalDate.parse("2022-09-04"),
                                        LocalDate.parse("2022-12-10"), 60,
                                        true, null, null);

                        // Course ensf611 = new Course("ENSF611");
                        // Course ensf612 = new Course("ENSF612");
                        // Course ensf614 = new Course("ENSF614");
                        // Course ensf613 = new Course("ENSF613");

                        repository.saveAll(List.of(ensf593, ensf594, ensf608, ensf611));

                };
        }
}
