import '../../App.css';
import React from 'react';
import AddStudentForm from '../AddStudentForm';

function Admin(){

    return(
        <>
        <div className='admin'>
        <h1>Add a new student to the database: </h1>
        <AddStudentForm/>

        <h1>Find all students in the database</h1>
        
        </div>        
        
        </>
    );
}

export default Admin;