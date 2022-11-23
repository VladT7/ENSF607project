DROP DATABASE IF EXISTS ASSIGNMENT6;
CREATE DATABASE ASSIGNMENT6;
USE ASSIGNMENT6;
DROP TABLE IF EXISTS COURSE;
CREATE TABLE COURSE (
    capacity integer,
    end_time date,
    has_prerequisite tinyint,
    id bigint not null,
    name varchar(30) not null,
    start_time date,
    primary key (id)
);
INSERT INTO Course (
        capacity,
        end_time,
        has_prerequisite,
        id,
        name,
        start_time
    )
VALUES (25, "2022-11-04",1, 25, "ENSF612", "2022-11-01"),
    (24,  "2022-11-04",1,20, "ENSF611", "2022-11-01");
DROP TABLE IF EXISTS STUDENT;
CREATE TABLE STUDENT (
    id bigint not null,
    #i dont know what this id is supposed to be
    password varchar(255),
    ucid varchar(255),
    username varchar(255),
    DOB date,
    #ours that we created
    primary key (ucid) #what i think it should be, I may be wrong, please change if disagree
);
INSERT INTO STUDENT (id, password, ucid, username, DOB)
VALUES (
        1234,
        "monkey",
        "10120392",
        "John Smith",
        "1999-12-02"
    ),
    (
        6789,
        "turtle",
        "38492018",
        "Cindy Lu",
        "1995-04-08"
    );
DROP TABLE IF EXISTS STUDENT_ENROLLED;
CREATE TABLE STUDENT_ENROLLED(
    course_id bigint,
    #what we have is offering_id, don't know if you guys want to change it, if so go ahead
    student_id bigint,
    grade varchar(225),
    #ours, also how about boolean?
    offering_id bigint,
    #ours but do we need it?
    primary key(student_id) #what i think it should be, I may be wrong, please change if disagree
);
INSERT INTO STUDENT_ENROLLED(course_id, student_id, grade, offering_id)
VALUES (59201, 12345678, "A", 2345),
    (59301, 5432109, "F", 6543);
############################################################
###		Our own now		###
DROP TABLE IF EXISTS OFFERINGS;
CREATE TABLE OFFERINGS(
    id varchar(255),
    teacher varchar(255),
    semester varchar(255),
    primary key (id)
);
INSERT INTO OFFERINGS(id, teacher, semester)
VALUES ("ENSF 592", "Mohammad Moshirpour", "SP"),
    #SP is for spring. F = Fall, W = Winter, SP = Spring, SU = Summer
    ("ENSF 593", "Mahmood Moussavi", "SU");
DROP TABLE IF EXISTS OFFERED_IN;
CREATE TABLE OFFERED_IN(
    course_id varchar(255),
    offering_id varchar(225),
    primary key(course_id)
);
INSERT INTO OFFERED_IN(course_id, offering_id)
VALUES (1, 1),
    (1, 2);
DROP TABLE IF EXISTS PRE_REQUISITES;
CREATE TABLE PRE_REQUISITES(
    course_id varchar(255),
    pre_req varchar(255),
    primary key (course_id)
);
-- INSERT INTO PRE_REQUISITES(course_id, pre_req)
-- VALUES (4, 2),
--     (3, 1);
--     