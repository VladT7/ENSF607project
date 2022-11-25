import '../../App.css';
import React from 'react';
import AddStudentForm from '../AddStudentForm';

function Admin(){

    return(
        <>
        <div className='admin'>
        <h1>Add a new student to the database: </h1>
        <AddStudentForm/>        
        </div>        
        
        </>
    );
}

export default Admin;