import '../../App.css';
import React, { useState} from 'react';
import EnrollCourseForm from '../EnrollCourseForm';
import DropCourseForm from '../DropCourseForm';

function StudentInfo(){

    const [userinput, setuserInput] = useState('');
    const [course, setcourse] = useState('');

    const searchCourse = async () => {
        const url = 'http://localhost:8080/api/v1/student/students/' + userinput;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        });

        const result = await response.json();
        setcourse(result);
        console.log(course);
        console.log(url);
        console.log(result);
        setuserInput('');        
    }

    
    return(
        <>
        <div className='stdinfo'>
        <h1>To view all your current courses, please type your student ID in the search bar below: </h1>

        <div className="input-group mb-3">
                    <input type="text" value={userinput} onChange={(e) => setuserInput(e.target.value)} className="form-control" placeholder="Enter your student ID: e.g 3467980" ></input>
                    <div className="input-group-append">
                        <button onClick={searchCourse} className="btn btn-outline-secondary" type="button">Search</button>
                    </div>
        </div>

        {course && course?.map(item => (                    
                                           
            <h1> {item.name} </h1>   
                        
                    
        ))}

        <hr></hr>

        <EnrollCourseForm/>
        
        <hr></hr>

        <DropCourseForm/>

        </div>            

         
        </>
    );
}

export default StudentInfo;