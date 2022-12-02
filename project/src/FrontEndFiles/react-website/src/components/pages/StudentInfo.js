import '../../App.css';
import React, { useState } from 'react';
import EnrollCourseForm from '../EnrollCourseForm';
import DropCourseForm from '../DropCourseForm';
import { useNavigate } from 'react-router-dom';

function StudentInfo() {

    const [userinput, setuserInput] = useState('');
    const [course, setcourse] = useState('');
    let navigate = useNavigate();

    const searchCourse = async () => {
        const url = '//ensf607project-env.eba-bv4mjdbr.us-east-1.elasticbeanstalk.com/api/v1/student/students/' + userinput;
        // const url = 'http://localhost:8080/api/v1/student/students/' + userinput;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        });
        const result = await response.json();
        setcourse(result);

        if (result.length === 0) {
            alert("You're not currently enrolled in any courses")
        }

        if (result.status == 500) {
            alert("Sorry, your UCID does not exist!")
            navigate('/studentinfo');
        }

        setuserInput('');
    }


    return (
        <>
            <div className='stdinfo'>
                <h1>To view all your current courses, please type your student ID in the search bar below: </h1>

                <div className="input-group mb-3">
                    <input type="text" value={userinput} onChange={(e) => setuserInput(e.target.value)} className="form-control" placeholder="Enter your student ID: e.g 3467980" ></input>
                    <div className="input-group-append">
                        <button onClick={searchCourse} className="btn btn-outline-secondary" type="button">Search</button>
                    </div>
                </div>

                {Array.isArray(course)
                    ? course.map(element => {
                        return <h2>{element.name}</h2>;
                    })
                    : null}
                <hr></hr>

                <EnrollCourseForm />

                <hr></hr>

                <DropCourseForm />

            </div>


        </>
    );
}

export default StudentInfo;