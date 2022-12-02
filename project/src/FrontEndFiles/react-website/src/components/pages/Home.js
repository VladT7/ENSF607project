import '../../App.css';
import React from 'react';
import { useState } from 'react';
import AddCourseForm from '../AddCourseForm';
import AddPrereqForm from '../AddPrereqForm';

function Home() {
    const [student, setstudent] = useState([]);

    const handleClick = async () => {
        const response = await fetch('http://ensf607project-env.eba-bv4mjdbr.us-east-1.elasticbeanstalk.com/api/v1/student', {
        // const response = await fetch('http://localhost:8080/api/v1/student', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        });
        const result = await response.json();
        setstudent(result);

        console.log('result is: ', JSON.stringify(result, null, 4));
    }

    const [course, setCourse] = useState({});
    const [userinput, setuserInput] = useState('');

    const searchCourse = async () => {
        const url = 'http://ensf607project-env.eba-bv4mjdbr.us-east-1.elasticbeanstalk.com/api/v1/course/' + userinput;
        // const url = 'http://localhost:8080/api/v1/course/' + userinput;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        });

        const result = await response.json();

        if(result.status === 500){
            alert(result.message)
            console.log(result);
            setuserInput('');
        }
        else {
            setCourse(result);
            setuserInput('');
        }
        
        
    }


    return (
        <>
            <div className='admin'>
                <h2>Search courses by course name: </h2>
                <div className="input-group mb-3">
                    <input type="text" value={userinput} onChange={(e) => setuserInput(e.target.value)} className="form-control" placeholder="Search by course name: ENSF593" ></input>
                    <div className="input-group-append">
                        <button onClick={searchCourse} className="btn btn-outline-secondary" type="button">Search</button>
                    </div>
                </div>

                <div>
                    <h1>{course && course.name}</h1>
                    <p> Start Date = { course && course.startTime} </p>
                    <p>End Date = { course && course.endTime}</p>
                    <p>Capacity = { course && course.capacity}</p>
                    <p>{course && course.prerequisites?.map(prereq => (
                        <ul>
                            <p>Prereq = {prereq.name}</p>
                        </ul>
                    ))}</p>
                </div>
                <hr></hr>

                <h2>To find all students currently enrolled, click the button below:</h2>
                <button onClick={handleClick} type="button" className="btn btn-primary btn-lg">Find All Students </button>
                <div>
                    <ul>
                        {student.map(item => (
                            <li>
                                <p> Student name = {item.username} </p>
                                <p> Student ucid = {item.ucid} </p>
                            </li>
                        ))}
                    </ul>
                </div>
                <hr></hr>

                <h2>To add a new course to the course catalogue:  </h2>
                <AddCourseForm/> 
                <hr></hr>

                <h2>To add a pre-requisite to an existing course: </h2>
                <p>Please note: both the course and the pre-req must exist in the database. If they don't, please create them first!</p>
                <AddPrereqForm/>
            </div>

        </>
    );
}

export default Home;