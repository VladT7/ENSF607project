import React from "react";
import "./HeroSection.css";
import "../App.css";
import { useState } from "react";

function EnrollCourseForm() {
  const [name, setname] = useState("");
  const [ucid, setucid] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const enroll = { name, ucid };
    const url =
      "http://ensf607project-env.eba-bv4mjdbr.us-east-1.elasticbeanstalk.com/api/v1/course/" + name + "/students/" + ucid;
      // "http://localhost:8080/api/v1/course/" + name + "/students/" + ucid;

    fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(enroll),
    })
      .then((result) => {
        if (result.ok) {
          return result.json();
        }
        return result.json().then((result) => {
          console.log(result)
          alert(result.message)
          setname("");
          setucid("");
          throw new Error(result.error);       
          
        });
      })
      .then(() => {
        alert("You've been enrolled in " + name);
        setname("");
        setucid("");
      })
      .catch((error) =>
        console.log(error.message)        
      );
  };

  return (
    <>
      <h1>
        To enroll in a course, please enter the course name and your ucid below:
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Course Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setname(e.target.value)}
            className="form-control"
            placeholder="Enter Course Name, e.g.: ENSF590"
          ></input>
        </div>

        <div className="form-group">
          <label>UCID:</label>
          <input
            type="text"
            value={ucid}
            onChange={(e) => setucid(e.target.value)}
            className="form-control"
            placeholder="Enter your UCID, e.g 2800232"
          ></input>
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-lg"
        >
          Enroll
        </button>
      </form>
    </>
  );
}

export default EnrollCourseForm;
