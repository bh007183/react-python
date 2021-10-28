import React, {useEffect, useState} from "react"
import axios from "axios";

export default function Dashboard() {
    const [courses, setCourses] = useState(null)
    useEffect(() => {
      axios.get('http://localhost:8000/api/course').then(res => {
        setCourses(res.data)
      })
      
    }, [])
    return (
        <div>
            
        </div>
    )
}
