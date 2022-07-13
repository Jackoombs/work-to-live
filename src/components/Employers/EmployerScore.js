import React from "react";
import LifeScore from "../../assets/images/life_score.png"

function EmployerScore({ employer }) {

  return (
    <div className="score">
      <h3><img src={LifeScore} alt="flame icon" />Life Score</h3>
      <p> {employer.score}</p>
    </div>
  )
}

export default EmployerScore