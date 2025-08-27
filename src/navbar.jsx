import React from 'react'
import {Link} from "react-router-dom"

function navbar() {
  return (
    <div className="bg-blue-600 font-bold font-serif text-lg color text-white ">
      
   <Link to="/"className="px-2  ; color:white;">Home</Link>
   <Link to="/about" className="px-5">About</Link>
   <Link to="/course">Course</Link>
   </div>
  )
}

export default navbar