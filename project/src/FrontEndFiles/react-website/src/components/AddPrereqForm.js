import React from "react";
import "./HeroSection.css";
import "../App.css";
import { useState } from "react";

function AddPrereqForm() {
  const [coursename, setcoursename] = useState("");
  const [prereqname, setPrereqname] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const course = { coursename, prereqname };
    const url =
      "http://ensf607project-env.eba-bv4mjdbr.us-east-1.elasticbeanstalk.com/api/v1/course/" +
      // "http://localhost:8080/api/v1/course/" +
      coursename +
      "/course/" +
      prereqname;
    fetch(url, {
      method: "PUT",
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
          setPrereqname("");
          throw new Error(result.error);
        });
      })
      .then(() => {
        alert("Prerequisite successfully added");
        setcoursename("");
        setPrereqname("");
      })
      .catch((error) =>
        console.log(error)
      );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Course Name</label>
        <input
          type="text"
          value={coursename}
          onChange={(e) => setcoursename(e.target.value)}
          className="form-control"
          placeholder="Enter Course Name, e.g.: ENSF590"
        ></input>
      </div>

      <div className="form-group">
        <label>Pre-requisite name</label>
        <input
          type="text"
          value={prereqname}
          onChange={(e) => setPrereqname(e.target.value)}
          className="form-control"
          placeholder="Enter pre-req name, e.g ENSF611"
        ></input>
      </div>

      <button
        type="submit"
        className="btn btn-primary"
      >
        Add Prereq
      </button>
    </form>
  );
}

export default AddPrereqForm;
