import React from 'react'
import './HeroSection.css';
import '../App.css';
import {useState } from "react";

function AddStudentForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [UCID, setUCID] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {username, password, UCID};
        fetch('http://localhost:8080/api/v1/student',{
            method:'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        }). then(() => {
            console.log('i just did something');
        })
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <div class="form-group">
                <label for="exampleInputEmail1">Username</label>
                <input type="username" value = {username} onChange={(e) => setUsername(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Username"></input>
        
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" value = {password} onChange={(e) => setPassword(e.target.value)} class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
            </div>

            <div class="form-group">
                <label for="exampleInputPassword1">UCID</label>
                <input type="UCID" value = {UCID} onChange={(e) => setUCID(e.target.value)} class="form-control" id="exampleInputPassword1" placeholder="Enter UCID"></input>
            </div>

            <button type="submit" class="btn btn-primary">Register</button>
        </form>        
    )
}

export default AddStudentForm


// render() {
//     return (
//       <Container>
//         <Header/>
//         <form onSubmit = { this.handleSubmit }>
//           <label> Person Name:
//             <input type = "text" name = "name" onChange= {this.handleChange}/>
//           </label>
//           <button type = "submit"> Add </button>
//         </form>
//     </Container>
//     );
//   }
// }
// export default SubmitForm;