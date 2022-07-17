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

  return (
    <div className="stat">
      <h3><img src={Retirement} alt="retirement icon" />Pensions</h3>
      <ul>
        {employer.pensionContribution 
          ? <li>{employer.pensionContribution}% of salary contribution</li> 
          : <SubmitLink field="pension"/>}
        {isMatching()}
      </ul>
    </div>
  )
}

export default PensionStat