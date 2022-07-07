import React from "react";
import { AiFillFire } from "react-icons/ai"

function EmployerScore({ employer }) {

  const scoreCalc = () => {
    const array = [
                    employer.maternityLeave, 
                    employer.paternityLeave, 
                    employer.pensionContribution, 
                    employer.holidayEntitlement
                  ]
    const total = array.reduce((pre, curr) => pre + curr, 0)
    return Math.round(total / 4)
  }

  return (
    <div className="score">
      <h3><AiFillFire />Life Score...</h3>
      <p>{scoreCalc()}</p>
    </div>
  )
}

export default EmployerScore