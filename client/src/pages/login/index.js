import React, {useEffect, useState} from "react"
import axios from "axios";
import Grid from "@mui/material/Grid";
import {Link} from "react-router-dom"
import "./style.css"

export default function Create() {
  const [student, setSudent] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setSudent({
      ...student,
      [name]: value,
    });
  };
  const createStudent = async (event) => {
    event.preventDefault();
    const { first_name, email, password } = student;
    try {
      let response = await axios.post("http://localhost:8000/api/student/login", {
        email,
        password,
      });
      console.log(response)
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className="full-screen">
        <div className="center-item white">
            <h1>Burkly University</h1>
        </div>
        <div className="center-item white">
            <h2>Login Student Account</h2>
        </div>
      <form className="form" onSubmit={createStudent}>
        <Grid container gap={2}>
          <Grid className="center-item" item xs={12}>
            <input
              onChange={handleChange}
              placeholder="email"
              name="email"
              value={student.email}
            ></input>
          </Grid>
          <Grid className="center-item" item xs={12}>
            <input
              onChange={handleChange}
              placeholder="password"
              name="password"
              value={student.password}
            ></input>
          </Grid>
          <Grid className="center-item" item xs={12}>
            <button>Student Login</button>
          </Grid>
        </Grid>
      </form>
      
          <Link id="login-link" className="white" to="/">Dont Have An Account?</Link>
          
      
    </div>
  );
}