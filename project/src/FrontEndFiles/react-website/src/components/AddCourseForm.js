import React from "react";
import "./HeroSection.css";
import "../App.css";
import { useState } from "react";

function AddCourseForm() {
  const [name, setcoursename] = useState("");
  const [startTime, setstarttime] = useState("");
  const [endTime, setendtime] = useState("");
  const [capacity, setCapacity] = useState("");
  const [hasPrerequisite, setPrereq] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const course = { name, startTime, endTime, capacity, hasPrerequisite };
    console.log(JSON.stringify(course));
    fetch("http://ensf607project-env.eba-bv4mjdbr.us-east-1.elasticbeanstalk.com/api/v1/course", {
    // fetch("http://localhost:8080/api/v1/course", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(course),
    })
      .then((result) => {
        if (result.ok) {
          return result.json();
        }
        return result.json().then((result) => {
          alert(result.message);
          setcoursename("");
          setstarttime("");
          setendtime("");
          setCapacity("");
          setPrereq("");
          throw new Error(result.error);
        });
      })
      .then(() => {
        alert(name + " successfully added.");
        setcoursename("");
        setstarttime("");
        setendtime("");
        setCapacity("");
        setPrereq("");
      })
      .catch((error) =>
        console.log(error)
      );
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <form onSubmit={handleSubmit}> */}
      <div className="form-group">
        <label>Course Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setcoursename(e.target.value)}
          className="form-control"
          placeholder="Enter Course Name, e.g.: ENSF590"
        ></input>
      </div>
      <div className="form-group">
        <label>Start Time</label>
        <input
          type="text"
          value={startTime}
          onChange={(e) => setstarttime(e.target.value)}
          className="form-control"
          placeholder="Enter Start Time, e.g.: 2022-11-01"
        ></input>
      </div>

      <div className="form-group">
        <label>End Time</label>
        <input
          type="text"
          value={endTime}
          onChange={(e) => setendtime(e.target.value)}
          className="form-control"
          placeholder="Enter End Time, e.g.: 2022-11-01"
        ></input>
      </div>

      <div className="form-group">
        <label>Capacity</label>
        <input
          type="text"
          value={capacity}
          onChange={(e) => setCapacity(e.target.value)}
          className="form-control"
          placeholder="Enter Capacity, e.g. 10"
        ></input>
      </div>

      <div className="form-group">
        <label>Does it have prerequisites?</label>
        <input
          type="text"
          value={hasPrerequisite}
          onChange={(e) => setPrereq(e.target.value)}
          className="form-control"
          placeholder="Enter TRUE or FALSE"
        ></input>
      </div>

      <button
        type="submit"
        className="btn btn-primary"
      >
        Create Course
      </button>
    </form>
  );
}

export default AddCourseForm;
