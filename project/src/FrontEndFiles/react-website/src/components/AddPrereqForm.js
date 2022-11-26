import React from 'react'
import './HeroSection.css';
import '../App.css';
import {useState } from "react";

function AddPrereqForm() {
    const [coursename, setcoursename] = useState('');
    const [prereqname, setPrereqname] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const course = {coursename, prereqname};
        const url = 'http://localhost:8080/api/v1/course/'+coursename+'/course/'+prereqname;
        fetch(url,{
            method:'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(course)
        }). then(() => {
            console.log('i just did something');
            setcoursename('');            
            setPrereqname('');
        })
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Course Name</label>
                <input type="text" value = {coursename} onChange={(e) => setcoursename(e.target.value)} className="form-control" placeholder="Enter Course Name, e.g.: ENSF590"></input>
        
            </div>

            <div className="form-group">
                <label>Pre-requisite name</label>
                <input type="text" value = {prereqname} onChange={(e) => setPrereqname(e.target.value)} className="form-control" placeholder="Enter pre-req name, e.g ENSF611"></input>
            </div>

            <button type="submit" className="btn btn-primary">Add Prereq</button>
        </form>        
    )
}

export default AddPrereqForm

// componentDidMount() {
//     // Simple PUT request with a JSON body using fetch
//     const requestOptions = {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ title: 'React PUT Request Example' })
//     };
//     fetch('https://jsonplaceholder.typicode.com/posts/1', requestOptions)
//         .then(response => response.json())
//         .then(data => this.setState({ postId: data.id }));
// }