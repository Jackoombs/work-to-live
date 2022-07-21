import React from "react";
import Retirement from "../../assets/images/retirement.png"
import BooleanStat from "./BooleanStat";
import SubmitLink from "./SubmitLink";
function PensionStat({ employer }) {

  const isMatching = () => {
    if (employer.pensionMatching) {
      return (
        <BooleanStat text="Pension matching"/>
      )
    }
  }

  const isNote = () => {
    if (employer.pensionNotes) {
      return (
        <li>{employer.pensionNotes}</li>
      )
    }
  }

  return (
    <div className="stat">
      <h3><img src={Retirement} alt="retirement icon" />Pensions</h3>
      <ul>
        {employer.pensionContribution 
          ? <li className="stat-bold">{employer.pensionContribution}% of salary contribution</li> 
          : <SubmitLink field="balance"/>}
        {isMatching()}
        {isNote()}
      </ul>
    </div>
  )
}

export default PensionStat