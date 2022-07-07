import React from "react";

function EmployerStats({ employer }) {

  const isMatching = () => {
    if (employer.pensionMatching) {
      return (
        <li>
          Matching
        </li>
      )
    }
  }

  return (
    <div className="employer-stats">

      <div className="stat" style={{backgroundColor: "#F5F0BB"}}>
        <h3>Pensions</h3>
        <ul>
          <li>{employer.pensionContribution}% of salary contribution.</li>
          {isMatching()}
        </ul>
      </div>

      <div className="parental-leave" style={{backgroundColor: "#C4DFAA"}}>
        <div className="stat"> 
          <h3>Maternity</h3>
          <ul>
            <li>{employer.maternityLeave} weeks full pay.</li>
          </ul>
        </div>
        <div className="stat">
        <h3>Paternity</h3>
          <ul>
            <li>{employer.paternityLeave} weeks full pay.</li>
          </ul>
        </div>
      </div>

      <div className="stat" style={{backgroundColor: "#aad6da"}}>
        <h3>Balance</h3>
        <ul>
          <li>{employer.holidayEntitlement} days holiday entitlement.</li>
        </ul>
      </div>
    </div>
  )
}

export default EmployerStats