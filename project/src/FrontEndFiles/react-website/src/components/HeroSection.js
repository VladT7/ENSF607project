import React from 'react'
import './HeroSection.css';
import '../App.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <div className='blur'>
                <h1>Instructions on using the website:</h1>
                <h2>Admin:</h2>
                <ul>
                    <li>To be used by the administration staff</li>
                    <li>Enter your password for access</li>
                </ul>
                <h2>All Courses:</h2>
                <ul>
                    <li>Click to view all available courses in the catalogue</li>
                </ul>
                <h2>Log In:</h2>
                <ul>
                    <li>Students can log in to view their enrollments, view and drop courses</li>
                </ul>
            </div>
        </div>
    )
}

export default HeroSection