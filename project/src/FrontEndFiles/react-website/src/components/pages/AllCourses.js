import '../../App.css';
import React, { useState, useEffect } from 'react';
import './AllCourses.css';


function AllCourses() {
    const [courses, setCourse] = useState([])
    useEffect(() => {
        const url = "http://localhost:8080/api/v1/course";
    
        const fetchData = async () => {
          try {
            const response = await fetch(url);
            const json = await response.json();
            setCourse(json);
          } catch (error) {
            console.log("error", error);
          }
        };
    
        fetchData();
    }, []);

    return (
        <>
            <div className='allCourses'>
            <h1>The List of available courses are:</h1>
            <ul>
                {courses.map(item => (
                    <li>                        
                        <h1> Course name = {item.name} </h1>
                        <p> start-Time = {item.startTime} </p>
                        <p>end-time = {item.endTime}</p>
                        <p>capacity = {item.capacity}</p>
                    </li>
                ))}
            </ul>
            </div>
        </>
    );
}

export default AllCourses;