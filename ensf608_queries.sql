USE ASSIGNMENT6;

#	Show all tables, explain how they are related to one another (keys, triggers, etc.)
SELECT * FROM COURSE;
SELECT * FROM STUDENT;
SELECT * FROM PREREQUISITES;
SELECT * FROM DEPARTMENT;
SELECT * FROM ENROLS;
SELECT * FROM OFFERINGS;
SELECT * FROM ADMIN;

#	A basic retrieval query: [Course Name, OfferingID, StudentID]
SELECT 
    e.OfferingID, e.StudentID, e.Grade, c.courseName
FROM
    ENROLS AS e,
    COURSE AS c
        INNER JOIN
    OFFERINGS AS o
WHERE
    e.OfferingID = o.OfferingID
        AND c.courseID = o.CourseID;

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

#	A nested retrieval query [Student Full Name, Grade, CourseName] for student with highest and lowest grades across all courses
SELECT 
    s.FName, s.LName, e.Grade, c.courseName, o.Year_offered
FROM STUDENT AS s    
    INNER JOIN ENROLS AS e ON e.StudentID = s.StudentID     
    INNER JOIN OFFERINGS AS o ON e.OfferingID = o.OfferingID    
    INNER JOIN COURSE AS c ON o.courseID = c.courseID        
WHERE
    Grade = (SELECT MAX(Grade) FROM ENROLS) OR Grade = (SELECT MIN(Grade) FROM ENROLS);

#	A retrieval query using joined tables [CourseName, PreReqs]

SELECT c.courseName, p.Prereq1, p.Prereq2, p.Prereq3 
FROM COURSE AS c
INNER JOIN PREREQUISITES as p ON p.CourseID = c.CourseID;

#	An update operation with any necessary triggers

#	A deletion operation with any necessary triggers
 