DROP DATABASE IF EXISTS ASSIGNMENT6;
CREATE DATABASE ASSIGNMENT6;
USE ASSIGNMENT6;

DROP TABLE IF EXISTS COURSE;
CREATE TABLE COURSE (
    courseID varchar(10),
    courseName varchar(80),
    courseCode varchar(10),
    primary key (courseID)
);
INSERT INTO COURSE (
        courseID,
        courseName,
        courseCode
        )
    
VALUES
(0000000001, "Programming Fundamentals for Data Engineers","ENSF 592"),
(0000000002, "Principles of Software Development I","ENSF 593"),
(0000000003, "Principles of Software Development II","ENSF 594"),

(0000000004, "Advanced Software Design and Architecture","ENSF 607"),
(0000000005, "Databases","ENSF 608"),
(0000000006, "Machine Learning for Sofware Engineers","ENSF 611"),
(0000000007, "Engineering Large Scale Data Analytics Systems","ENSF 612"),
(0000000008, "Advanced System Analysis and Software Design","ENSF 614"),

(0000000009, "Team Design Project in Software Engineering I","ENSF 609"),
(0000000010, "Team Design Project in Software Engineering II","ENSF 610"),
(0000000011, "Data Mining & Machine Learning", "ENEL 645"),
(0000000012, "Dependabillity and Realiability of Software Systems","SENG 637"),
(0000000013, "Ethics, Law, and the Engineering Profession","ENGG 687"),
(0000000014, "Innovation and Entrepreneurship","ENGG 683");
    
DROP TABLE IF EXISTS STUDENT;
CREATE TABLE STUDENT (
    ucid varchar(8),
    fName varchar(50),
    lName varchar(50),
    email varchar(50),
    primary key (ucid)
);
INSERT INTO STUDENT (ucid, fName, lname, email)
VALUES 
(10138517,"Cory","Shannon","cory.shannon@ucalgary.ca"),
(30042982,"Ayah","Metwali","ayah.metwali@ucalgary.ca"),
(10138517,"Vladyslav","Timofyeyev","vladyslav.timofyeyev@ucalgary.ca"),
(30002888,"Dhruvi","Dave","dhruvi.dave@ucalgary.ca");


DROP TABLE IF EXISTS OFFERINGS;
CREATE TABLE OFFERINGS(
    offeringID varchar(15),
    studentID varchar(255),
    
    semester varchar(255),
    primary key (id)
);


INSERT INTO OFFERINGS(id, teacher, semester)
VALUES ("ENSF 592", "Mohammad Moshirpour", "SP"),
    #SP is for spring. F = Fall, W = Winter, SP = Spring, SU = Summer
    ("ENSF 593", "Mahmood Moussavi", "SU");


-- DROP TABLE IF EXISTS STUDENT_ENROLLED;
-- CREATE TABLE STUDENT_ENROLLED(
--     course_id bigint,
--     #what we have is offering_id, don't know if you guys want to change it, if so go ahead
--     student_id bigint,
--     grade varchar(225),
--     #ours, also how about boolean?
--     offering_id bigint,
--     #ours but do we need it?
--     primary key(student_id) #what i think it should be, I may be wrong, please change if disagree
-- );
-- INSERT INTO STUDENT_ENROLLED(course_id, student_id, grade, offering_id)
-- VALUES (59201, 12345678, "A", 2345),
--     (59301, 5432109, "F", 6543);
-- ############################################################
-- ###		Our own now		###
-- DROP TABLE IF EXISTS OFFERINGS;
-- CREATE TABLE OFFERINGS(
--     id varchar(255),
--     teacher varchar(255),
--     semester varchar(255),
--     primary key (id)
-- );
-- INSERT INTO OFFERINGS(id, teacher, semester)
-- VALUES ("ENSF 592", "Mohammad Moshirpour", "SP"),
--     #SP is for spring. F = Fall, W = Winter, SP = Spring, SU = Summer
--     ("ENSF 593", "Mahmood Moussavi", "SU");
-- DROP TABLE IF EXISTS OFFERED_IN;
-- CREATE TABLE OFFERED_IN(
--     course_id varchar(255),
--     offering_id varchar(225),
--     primary key(course_id)
-- );
-- INSERT INTO OFFERED_IN(course_id, offering_id)
-- VALUES (1, 1),
--     (1, 2);
-- DROP TABLE IF EXISTS PRE_REQUISITES;
-- CREATE TABLE PRE_REQUISITES(
--     course_id varchar(255),
--     pre_req varchar(255),
--     primary key (course_id)
-- );
-- -- INSERT INTO PRE_REQUISITES(course_id, pre_req)
-- -- VALUES (4, 2),
-- --     (3, 1);
-- --     