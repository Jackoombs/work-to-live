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
          <li>{employer.pensionContribution}% of salary contribution.</li>
          {isMatching()}
        </ul>
      </div>

      <div className="parental-leave">
        <div className="stat"> 
          <h3><IoMdFemale />Maternity</h3>
          <ul>
            <li>{employer.maternityLeave} weeks full pay.</li>
          </ul>
        </div>
        <div className="stat">
        <h3><IoMdMale />Paternity</h3>
          <ul>
            <li>{employer.paternityLeave} weeks full pay.</li>
          </ul>
        </div>
      </div>

      <div className="stat">
        <h3><RiScalesLine />Balance</h3>
        <ul>
          <li>{employer.holidayEntitlement} days holiday entitlement.</li>
        </ul>
      </div>
    </div>
  )
}

export default EmployerStats