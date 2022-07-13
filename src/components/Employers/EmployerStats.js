import React from "react";
import Maternity from "../../assets/images/maternity.png"
import Paternity from "../../assets/images/paternity.png"
import Balance from "../../assets/images/balance.png"
import {IoIosCheckbox} from "react-icons/io"
import Retirement from "../../assets/images/retirement.png"

function EmployerStats({ employer }) {

  const isMatching = () => {
    if (employer.pensionMatching) {
      return (
        <li>
          Matched <IoIosCheckbox color="green"/>
        </li>
      )
    }
  }

  return (
    <div className="employer-stats">

      <div className="stat">
        <h3><img src={Retirement} alt="retirement icon" />Pensions</h3>
        <ul>
          {employer.pensionContribution ? <li>{employer.pensionContribution}% of salary contribution</li> : "Unknown"}
          {isMatching()}
        </ul>
      </div>

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

      <div className="stat">
        <h3><img src={Balance} alt="balance icon" />Balance</h3>
        <ul>
          {employer.holidayEntitlement ? <li>{employer.holidayEntitlement} days holiday entitlement</li> : "Unknown"}
        </ul>
      </div>
    </div>
  )
}

export default EmployerStats