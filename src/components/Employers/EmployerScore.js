import React from "react";
import { AiFillFire } from "react-icons/ai"

function EmployerScore({ employer }) {

  return (
    <div className="score">
      <h3><AiFillFire /> Life Score</h3>
      <p> {employer.score}</p>
    </div>
  )
}

export default EmployerScore