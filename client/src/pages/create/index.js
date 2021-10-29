import React, {useEffect, useState} from "react"
import axios from "axios";
import Grid from "@mui/material/Grid";
import {Link} from "react-router-dom"
import "./style.css"

export default function Create() {
  const [student, setSudent] = useState({
    first_name: "",
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
      let response = await axios.post("http://localhost:8000/auth/users/", {
        username: first_name,
        email,
        password,
      });
      if(response.status === 201){
        console.log(response.data)
        let createStudent = await axios.post("http://localhost:8000/api/student/", {
          id: response.data.id,
          first_name: response.data.username,
          email: response.data.email,
        });
        if(response.status === 200){
          window.location.href = "/login"
        }
      }
      
    } catch (err) {
      if(err.response.data.password){
        alert("There was an issue with your password")
      }else if(err.response.data.email){
        alert("there was an issue with your email")
      }else if(err.response.data.username){
        alert('there was an issue with your username')
      }else{
        alert('Somethings wrong')
      }
     
      
    }
  };
  return (
    <div className="full-screen">
        <div className="center-item white">
            <h1>Burkly University</h1>
        </div>
        <div className="center-item white">
            <h2>Create Student Account</h2>
        </div>
      <form className="form" onSubmit={createStudent}>
        <Grid container gap={2}>
          <Grid className="center-item" item xs={12}>
            <input
              onChange={handleChange}
              placeholder="first_name"
              name="first_name"
              value={student.first_name}
            ></input>
          </Grid>
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
            <button>Create Student</button>
          </Grid>
        </Grid>
      </form>
      
          <Link id="login-link" className="white" to="/login">Already Have Account?</Link>
          
      
    </div>
  );
}
