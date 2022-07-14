import React from "react";
import Balance from "../../assets/images/balance.png"
import BooleanStat from "./BooleanStat"

function BalanceStat({ employer }) {

  const showBenefits = () => {
    const benefits = [
      {isBenefit: employer.fourDayWeek, text: "4 day work week"},
      {isBenefit: employer.workingFromHome, text: "Work from home"},
      {isBenefit: employer.workingPartTime, text: "Part time work option"},
      {isBenefit: employer.paidSabbatical, text: "Paid sabbatical"},
      {isBenefit: employer.unpaidSabbatical, text: "Unpaid sabbatical"}
    ]
    return(
      benefits.map(benefit => (
        benefit.isBenefit
          ? <BooleanStat text={benefit.text} />
          :''
      ))
    )
    
  }

  return (
    <div className="stat">
      <h3><img src={Balance} alt="balance icon" />Balance</h3>
      <ul>
        {employer.holidayEntitlement 
          ? <li>{employer.holidayEntitlement} days holiday entitlement</li> 
          : "Unknown"}
        {showBenefits()}
      </ul>
    </div>
  )
}

export default BalanceStat