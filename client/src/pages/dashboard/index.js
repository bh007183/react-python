import React, {useEffect, useState} from "react"
import axios from "axios";

export default function Dashboard() {
    // const [courses, setCourses] = useState(null)
    // useEffect(() => {
    //   axios.get('http://localhost:8000/api/course').then(res => {
    //     setCourses(res.data)
    //   })
      
    // }, [])
    useEffect(async () => {
      try{
        let createStudent = await axios.get("http://localhost:8000/api/student/me", {
          headers: {
            authorization: `Bearer ${localStorage.getItem("Access")}`
          }
        });
        console.log(createStudent)
      }catch(err){
        console.log(err.response)
      }
      
      
      
    }, [])
    return (
        <div>
            hi
        </div>
    )
}
