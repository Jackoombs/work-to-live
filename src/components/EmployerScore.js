import React from "react";
import { AiFillFire } from "react-icons/ai"

function EmployerScore({ employer, setEmployerList, highestValues, lowestValues }) {

  const scoreCalc = () => {
    const array = [
                    arrayScore("maternityLeave"), 
                    arrayScore("paternityLeave"), 
                    arrayScore("pensionContribution"), 
                    arrayScore("holidayEntitlement"), 
                  ]
    const filteredArray = array.filter(field => field)
    const total = filteredArray.reduce((pre, curr) => pre + curr, 0);
    return total ? Math.round(total / filteredArray.length * 100) : "N/A"
       
  }

  const arrayScore = (key) => {
    return (employer[key] - lowestValues[key]) / (highestValues[key] - lowestValues[key])
  }

  return (
    <div className="score">
      <h3><AiFillFire />Life Score...</h3>
      <p>{scoreCalc()}</p>
    </div>
  )
}

export default EmployerScore