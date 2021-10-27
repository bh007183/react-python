import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from "react"
import axios from "axios"

function App() {
  const [student, setSudent] = useState({
    first_name: "",
    email: "",
    password: ""
  })

  const [courses, setCourses] = useState(null)
  useEffect(() => {
    axios.get('http://localhost:8000/api/course').then(res => {
      setCourses(res.data)
    })
    
  }, [])

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setSudent({
      ...student, [name]: value
    })
  }
  const createStudent = async (event) => {
    event.preventDefault()
    const {first_name, email, password} = student
    try{
      let studen = await axios.post('http://localhost:8000/api/student/', {first_name, email, password})
      console.log(studen)
    }catch(err){
      console.log(err.message)
    }
   
   
  }
  return (
    <>
    <div>
      <form onSubmit={createStudent}>
        <input onChange={handleChange} placeholder="first_name" name="first_name" value={student.first_name}></input>
        <input onChange={handleChange} placeholder="email" name="email" value={student.email}></input>
        <input onChange={handleChange} placeholder="password" name="password" value={student.password}></input>
        <button>Create Student</button>
      </form>
      

    </div>
    <div>

    
    </div>
    </>
  );
}

export default App;
