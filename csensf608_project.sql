DROP DATABASE IF EXISTS ASSIGNMENT6;
CREATE DATABASE ASSIGNMENT6;
USE ASSIGNMENT6;

DROP TABLE IF EXISTS DEPARTMENT;
CREATE TABLE DEPARTMENT(
DepartmentID		varchar(25),
DepartmentName		varchar(50),
primary key(DepartmentID)
);

INSERT INTO DEPARTMENT (DepartmentID, DepartmentName)
VALUES
(1, "Electrical Engineering"),
(2, "Software Engineering"),
(3, "General Engineering"),
(4, "Software Engineering for Engineers");

DROP TABLE IF EXISTS STUDENT;
CREATE TABLE STUDENT (
    StudentID varchar(8),
    FName varchar(50),
    LName varchar(50),
    Email varchar(50),
    primary key (StudentID)
);
INSERT INTO STUDENT (StudentID, FName, LName, Email)
VALUES 
(10138517,"Cory","Shannon","cory.shannon@ucalgary.ca"),
(30042982,"Ayah","Metwali","ayah.metwali@ucalgary.ca"),
(10138516,"Vladyslav","Timofyeyev","vladyslav.timofyeyev@ucalgary.ca"),
(30002888,"Dhruvi","Dave","dhruvi.dave@ucalgary.ca");

DROP TABLE IF EXISTS COURSE;
CREATE TABLE COURSE (
    courseID 		varchar(10),
    courseName 		varchar(80),
    courseCode 		varchar(10),
    DepartmentID	varchar(25),
    primary key (courseID),
    foreign key(DepartmentID) references DEPARTMENT(DepartmentID)
);
INSERT INTO COURSE (
        courseID,
        courseName,
        courseCode,
        DepartmentID
        )
    
VALUES
(1, "Programming Fundamentals for Data Engineers","ENSF 592",4),
(2, "Principles of Software Development I","ENSF 593",4),
(3, "Principles of Software Development II","ENSF 594",4),
(4, "Advanced Software Design and Architecture","ENSF 607",4),
(5, "Databases","ENSF 608",4),
(6, "Machine Learning for Sofware Engineers","ENSF 611",4),
(7, "Engineering Large Scale Data Analytics Systems","ENSF 612",4),
(8, "Advanced System Analysis and Software Design","ENSF 614",4),
(9, "Team Design Project in Software Engineering I","ENSF 609",4),
(10, "Team Design Project in Software Engineering II","ENSF 610",4),
(11, "Data Mining & Machine Learning", "ENEL 645",1),
(12, "Dependabillity and Realiability of Software Systems","SENG 637",2),
(13, "Ethics, Law, and the Engineering Profession","ENGG 687",3),
(14, "Innovation and Entrepreneurship","ENGG 683",3);
    
DROP TABLE IF EXISTS PREREQUISITES;
CREATE TABLE PREREQUISITES (
	CourseID		varchar(25),
	Prereq1			varchar(10) not null,
	Prereq2			varchar(10),
	Prereq3			varchar(10),
	Prereq4			varchar(10),
	primary key (CourseID)
    );

INSERT INTO PREREQUISITES (CourseID, Prereq1, Prereq2, Prereq3,Prereq4)
VALUES
(4,1,2,3,null),
(5,1,2,3,null),
(6,1,2,3, null),
(7,1,2,3, null),
(8,1,2,3, null);

ALTER TABLE PREREQUISITES
ADD foreign key (Prereq1) references COURSE(CourseID),
ADD	foreign key (Prereq2) references COURSE(CourseID),
ADD	foreign key (Prereq3) references COURSE(CourseID),
ADD	foreign key (Prereq4) references COURSE(CourseID);

DROP TABLE IF EXISTS ADMIN;
CREATE TABLE ADMIN(
AdminID varchar(25),
FName	varchar(25),
LName 	varchar(25),
DepartmentID varchar(25),
primary key(AdminID),
foreign key(DepartmentID) references DEPARTMENT(DepartmentID) 
);

INSERT INTO ADMIN(AdminID, FName,LName,DepartmentID)
VALUES
(1, "Jane", "Doe", 3),
(2, "John", "Smith",3),
(3, "Isac", "Newton", 3),
(4, "Albert", "Einstein",3);

DROP TABLE IF EXISTS OFFERINGS;
CREATE TABLE OFFERINGS(
    OfferingID varchar(15),
    Teacher varchar(25),
    Semester varchar(25),
    Year_offered varchar(25),
    Section varchar(25),    
    CourseID varchar(10),    
    primary key (OfferingID),
    foreign key(CourseID) references COURSE(CourseID) 
);

INSERT INTO OFFERINGS(OfferingID, Teacher, Semester, Section, Year_offered, CourseID)
VALUES
( 1, "Yvves Pauchard", "Summer", "1", "2022", 1),
( 2, "Maan Khedr ", "Summer", "1", "2021", 2),
( 3, "Maan Khedr", "Fall", "1", "2022", 3),
( 4, "Mohammed Moshirpour", "Fall", "1", "2022", 4),
( 5, "Jaspreet Kaur", "Fall", "1", "2019", 5),
( 6, "Vikram Kumar", "Fall", "1", "2022", 6),
( 7, "Gias Uddin", "Fall", "1", "2023",7),
( 8, "Mahmood Moussavi", "Fall", "1", "2022", 8),
( 9, "Maan Khedr", "Winter", "1", "2018", 9),
( 10, "Maan Khedr", "Winter", "1", "2022", 10),
( 11, "Steve Jobs", "Winter", "1", "2021", 11),
( 12, "George Washington", "Winter", "1", "2023", 12),
( 13, "Donald Trump", "Winter", "1", "2019", 13),
( 14, "Elon Musk", "Winter", "1", "2022", 13);

DROP TABLE IF EXISTS ENROLS;

CREATE TABLE ENROLS(
OfferingID varchar(25),
StudentID varchar(25),
AdminID varchar(25),
Grade int(5)
);

INSERT INTO ENROLS(OfferingID,StudentID,AdminID,Grade)
VALUES
(1,10138517,1, 90),
(2,10138517,1, 95),
(3,10138517,1, 75),
(4,10138517,1, 55),
(5,10138517,1, 45),
(6,10138517,1, 100),
(7,10138517,1, 89),
(8,10138517,1, 69),
(9,30042982,1, 77),
(10,30042982,1, 91),
(11,10138516,1, 88),
(12,10138516,1, 79),
(13,10138516,1, 94);


