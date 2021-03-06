import React from "react";
import Maternity from "../../assets/images/maternity.png"
import Paternity from "../../assets/images/paternity.png"
import SubmitLink from "./SubmitLink";

function ParentalStat({ employer }) {

  const showNotes = (note) => {
    if (note) {
      return (
        <li>{note}</li>
      )
    } 
  }

  return (
    <div className="parental-leave">
      <div className="stat"> 
        <h3><img src={Maternity} alt="maternity icon" />Maternity</h3>
        <ul>
          {employer.maternityLeave 
          ? <li className="stat-bold">{employer.maternityLeave} weeks full pay</li> 
          : <SubmitLink field="maternity"/>}
          {showNotes(employer.maternityNotes)}
        </ul>
      </div>
      <div className="stat">
      <h3><img src={Paternity} alt="paternity icon" />Paternity</h3>
        <ul>
          {employer.paternityLeave 
            ? <li className="stat-bold">{employer.paternityLeave} weeks full pay</li> 
            : <SubmitLink field="paternity"/>}
            {showNotes(employer.paternityNotes)}
        </ul>
      </div>
    </div>
  )
}

export default ParentalStat