import '../../App.css';
import React from 'react';
import { useState } from 'react';

function Home() {
    const [student, setstudent] = useState([]);

    const handleClick = async () => {
        const response = await fetch('http://localhost:8080/api/v1/student', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        });
        const result = await response.json();
        setstudent(result);

        console.log('result is: ', JSON.stringify(result, null, 4));
    }

    return (
        <>
            <div className='admin'>
                <h2>Search courses by course name: </h2>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Search by course name: ENSF593" ></input>
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button">Search</button>
                    </div>
                </div>
            </div>


            <div className='admin'>
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

            </div>
        </>
    );
}

export default Home;