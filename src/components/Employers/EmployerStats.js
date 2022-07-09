import React from "react";
import { IoMdMale, IoMdFemale, IoIosCheckbox} from "react-icons/io"
import { BsPiggyBank } from "react-icons/bs"
import { RiScalesLine } from "react-icons/ri"

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
        <h3><BsPiggyBank />Pensions</h3>
        <ul>
          {employer.pensionContribution ? <li>{employer.pensionContribution}% of salary contribution.</li> : "Unknown"}
          {isMatching()}
        </ul>
      </div>

      <div className="parental-leave">
        <div className="stat"> 
          <h3><IoMdFemale />Maternity</h3>
          <ul>
            {employer.maternityLeave ? <li>{employer.maternityLeave} weeks full pay.</li> : "Unknown"}
          </ul>
        </div>
        <div className="stat">
        <h3><IoMdMale />Paternity</h3>
          <ul>
            {employer.paternityLeave ? <li>{employer.paternityLeave} weeks full pay.</li> : "Unknown"}
          </ul>
        </div>
      </div>

      <div className="stat">
        <h3><RiScalesLine />Balance</h3>
        <ul>
          {employer.holidayEntitlement ? <li>{employer.holidayEntitlement} days holiday entitlement.</li> : "Unknown"}
        </ul>
      </div>
    </div>
  )
}

export default EmployerStats