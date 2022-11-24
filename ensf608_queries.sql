USE ASSIGNMENT6;

#	Show all tables, explain how they are related to one another (keys, triggers, etc.)
-- SELECT * FROM COURSE;
-- SELECT * FROM STUDENT;
-- SELECT * FROM PREREQUISITES;
-- SELECT * FROM DEPARTMENT;
-- SELECT * FROM ENROLS;
-- SELECT * FROM OFFERINGS;
-- SELECT * FROM ADMIN;

#	A basic retrieval query: [Course Name, OfferingID, StudentID]
-- SELECT 
--     e.OfferingID, e.StudentID, e.Grade, c.courseName
-- FROM
--     ENROLS AS e,
--     COURSE AS c
--         INNER JOIN
--     OFFERINGS AS o
-- WHERE
--     e.OfferingID = o.OfferingID
--         AND c.courseID = o.CourseID;

#	A retrieval query with ordered results

SELECT o.Year_offered, o.Semester, c.courseName
from
	OFFERINGS AS o
    INNER JOIN
    COURSE AS c
WHERE
	o.courseID = c.courseID
ORDER BY
	o.Year_offered, o.Semester DESC;

#	A nested retrieval query [CourseName, PreReqs]

#	A retrieval query using joined tables

#	An update operation with any necessary triggers

#	A deletion operation with any necessary triggers
 