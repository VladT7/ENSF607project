package course.ensf607.assignment6.course;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CourseService {

    private final CourseRepository courseRepository;

    @Autowired
    public CourseService(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    public List<Course> getAllCourses() {
        return courseRepository.findAll(Sort.by(Sort.Direction.ASC, "name"));
    }

    public void addNewCourse(Course course) {
        Optional<Course> courseByName = courseRepository.findByName(course.getName());
        if (courseByName.isPresent()) {
            throw new IllegalStateException("Course already exist!");
        }
        courseRepository.save(course);
    }

    public void updateCourse(Course course) {
        courseRepository.save(course);
    }

    public void removeCourse(String courseName) {
        Course toBeDeleted = getCourseByName(courseName);
        courseRepository.delete(toBeDeleted);
        // courseRepository.delete(toBeDeleted);
    }

    public Course getCourseById(Long courseId) {
        Optional<Course> courseById = courseRepository.findById(courseId);
        if (!courseById.isPresent()) {
            throw new IllegalStateException("Course doesn't exist!");
        }
        return courseById.get();
    }

    // new

    public Course getCourseByName(String courseName) {
        Optional<Course> courseByName = courseRepository.findByName(courseName);
        if (!courseByName.isPresent()) {
            throw new IllegalStateException("Course Name doesn't exist -- new");
        }

        return courseByName.get();
    }
}
