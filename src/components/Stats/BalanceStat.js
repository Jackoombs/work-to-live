import React from "react";
import Balance from "../../assets/images/balance.png"
import BooleanStat from "./BooleanStat"
import SubmitLink from "./SubmitLink";

function BalanceStat({ employer }) {

  const showBenefits = () => {
    const benefits = [
      {isBenefit: employer.fourDayWeek, text: "4 day work week"},
      {isBenefit: employer.workingFromHome, text: "Work from home"},
      {isBenefit: employer.workingPartTime, text: "Part time option"},
      {isBenefit: employer.paidSabbatical, text: "Paid sabbatical"},
      {isBenefit: employer.unpaidSabbatical, text: "Unpaid sabbatical"}
    ]
    return(
      benefits.map((benefit, index) => (
        benefit.isBenefit
          ? <BooleanStat key={index} text={benefit.text} />
          :''
      ))
    )
  }

  const showNote = () => {
    if (employer.balanceNotes){
      return(
        <li>{employer.balanceNotes}</li>
      )
    }
  }

  return (
    <div className="stat">
      <h3><img src={Balance} alt="balance icon" />Balance</h3>
      <ul>
        {employer.holidayEntitlement 
          ? <li>{employer.holidayEntitlement} days holiday entitlement</li> 
          : <SubmitLink field="holiday"/>}
        {showBenefits()}
        {showNote}
      </ul>
    </div>
  )
}

export default BalanceStat