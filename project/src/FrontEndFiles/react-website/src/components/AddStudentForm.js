import React from "react";
import "./HeroSection.css";
import "../App.css";
import { useState } from "react";

function AddStudentForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [ucid, setucid] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { username, password, ucid };
    fetch("http://ensf607project-env.eba-bv4mjdbr.us-east-1.elasticbeanstalk.com/api/v1/student", {
    // fetch("http://localhost:8080/api/v1/student", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((result) => {
        if (result.ok) {
          return result.json();
        }
        return result.json().then((result) => {
          throw new Error(result.error);
        });
      })
      .then(() => {
        alert(username + " successfully added.");
        setUsername("");
        setPassword("");
        setucid("");
      })
      .catch((error) =>
        alert(error.message + ". Are you sure you fulfilled the requirements?")
      );
    //TODO this is throwing an error
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="form-control"
          placeholder="Enter Username"
        ></input>
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          placeholder="Password"
        ></input>
      </div>

      <div className="form-group">
        <label>UCID</label>
        <input
          type="text"
          value={ucid}
          onChange={(e) => setucid(e.target.value)}
          className="form-control"
          placeholder="Enter UCID"
        ></input>
      </div>

      <button
        type="submit"
        className="btn btn-primary"
      >
        Register
      </button>
    </form>
  );
}

export default AddStudentForm;
