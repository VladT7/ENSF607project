import React from 'react'
import './HeroSection.css';
import '../App.css';
import {useState } from "react";

function DropCourseForm() {

    const [name, setname] = useState('');
    const [ucid, setucid] = useState('');

    const handledrop = (e) => {
        e.preventDefault();
        const drop = {name, ucid};        
        const url = 'http://localhost:8080/api/v1/course/'+name+'/students/'+ucid;
        fetch(url,{
            method:'DELETE',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(drop)
        }). then(() => {
            console.log('i just did something');
            setname('');            
            setucid('');
        })
        
    }    
    

    return (
        <>
        <h1>To drop a course, please enter the course name and your ucid below:</h1>
        <form onSubmit={handledrop}>
            <div className="form-group">
                <label>Course Name</label>
                <input type="text" value = {name} onChange={(e) => setname(e.target.value)} className="form-control" placeholder="Enter Course Name, e.g.: ENSF590"></input>
        
            </div>

            <div className="form-group">
                <label>UCID:</label>
                <input type="text" value = {ucid} onChange={(e) => setucid(e.target.value)} className="form-control" placeholder="Enter your UCID, e.g 2800232"></input>
            </div>

            <button type="submit" className="btn btn-primary btn-lg">Drop</button>
        </form>
       
        </>
            
    );
}

export default DropCourseForm