import '../../App.css';
import React, { useState} from 'react';

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

    const [name, setname] = useState('');
    const [ucid, setucid] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const enroll = {name, ucid};
        const url = 'http://localhost:8080/api/v1/course/'+name+'/students/'+ucid;
        fetch(url,{
            method:'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(enroll)
        }). then(() => {
            console.log('i just did something');
            setname('');            
            setucid('');
        })
        
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

        <h1>To enroll in a course, please enter the course name and your ucid below:</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Course Name</label>
                <input type="text" value = {name} onChange={(e) => setname(e.target.value)} className="form-control" placeholder="Enter Course Name, e.g.: ENSF590"></input>
        
            </div>

            <div className="form-group">
                <label>UCID:</label>
                <input type="text" value = {ucid} onChange={(e) => setucid(e.target.value)} className="form-control" placeholder="Enter your UCID, e.g 2800232"></input>
            </div>

            <button type="submit" className="btn btn-primary btn-lg">Enroll</button>
        </form>     




        </div>        
        

         
        </>
    );
}

export default StudentInfo;