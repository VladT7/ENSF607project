import '../../App.css';
import React, { useState, useEffect } from 'react';


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
        <div className='hero-container'>
        <div className='allCourses'>
            <h1>The List of available courses are:</h1>
            <ul>
                {courses.map(item => (                    
                    <li>                        
                        <h1> Course name = {item.name} </h1>
                        <p> Start Date = {item.startTime} </p>
                        <p>End Date = {item.endTime}</p>
                        <p>Capacity = {item.capacity}</p>
                    </li>
                ))}
            </ul>
            </div>
        </div>            
        </>
    );
}

export default AllCourses;