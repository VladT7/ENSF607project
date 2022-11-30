USE ASSIGNMENT6;

#	Show all tables, explain how they are related to one another (keys, triggers, etc.)
SELECT * FROM COURSE;
SELECT * FROM STUDENT;
SELECT * FROM PREREQUISITES;
SELECT * FROM DEPARTMENT;
SELECT * FROM ENROLS;
SELECT * FROM OFFERINGS;
SELECT * FROM ADMIN;

-- #(2)	A basic retrieval query: [Course Name, OfferingID, StudentID]
-- # A master table showing enrollment and course details for students in the MEng cohort with details on offering and course ID(Result 8)
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

-- -- #(3)	A retrieval query with ordered results
-- # A query showing the offering listed in increasing order by year offered
SELECT o.Year_offered, o.Semester, c.courseName
from
	OFFERINGS AS o
    INNER JOIN
    COURSE AS c
WHERE
	o.courseID = c.courseID
ORDER BY
	o.Year_offered, o.Semester;

-- -- #	A nested retrieval query [Student Full Name, Grade, CourseName] for student with highest and lowest grades across all courses
SELECT 
    s.FName, s.LName, e.Grade, c.courseName, o.Year_offered
FROM STUDENT AS s    
    INNER JOIN ENROLS AS e ON e.StudentID = s.StudentID     
    INNER JOIN OFFERINGS AS o ON e.OfferingID = o.OfferingID    
    INNER JOIN COURSE AS c ON o.courseID = c.courseID        
WHERE
    Grade = (SELECT MAX(Grade) FROM ENROLS) OR Grade = (SELECT MIN(Grade) FROM ENROLS);

#	A retrieval query using joined tables [CourseName, PreReqs]
SELECT c.courseCode, p.PrereqID1, p.PrereqID2, p.PrereqID3, p.PrereqID4
FROM COURSE AS c
INNER JOIN PREREQUISITES as p ON p.CourseID = c.CourseID;

#	An update operation with any necessary triggers
 -- show tables prior to update
SELECT * FROM OFFERINGS;
SELECT* FROM ENROLS;
-- perform update
UPDATE ENROLS
SET OfferingID = 9 WHERE StudentID = 10138517 AND OfferingID = 4;
-- show tables after update
SELECT* FROM ENROLS;
SELECT * FROM OFFERINGS;

#	An inseration and deletion operation with any necessary triggers
-- show tables prior to insertion and deletion
DELETE FROM ENROLS WHERE StudentID = "10138517" AND OfferingID = 1;
INSERT INTO ENROLS
VALUES
(5,30042982,1, null),
(5,30042983,1, null),
(5,30042984,1, null),
(5,30042985,1, null),
(5,30042986,1, null),
(5,30042987,1, null),
(5,30042988,1, null),
(5,30042989,1, null);

SELECT * FROM OFFERINGS;
SELECT * FROM ENROLS;
