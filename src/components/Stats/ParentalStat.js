import React from "react";
import Maternity from "../../assets/images/maternity.png"
import Paternity from "../../assets/images/paternity.png"

function ParentalStat({ employer }) {
  return (
    <div className="parental-leave">
      <div className="stat"> 
        <h3><img src={Maternity} alt="maternity icon" />Maternity</h3>
        <ul>
          {employer.maternityLeave ? <li>{employer.maternityLeave} weeks full pay</li> : "Unknown"}
        </ul>
      </div>
      <div className="stat">
      <h3><img src={Paternity} alt="paternity icon" />Paternity</h3>
        <ul>
          {employer.paternityLeave ? <li>{employer.paternityLeave} weeks full pay</li> : "Unknown"}
        </ul>
      </div>
    </div>
  )
}

export default ParentalStat