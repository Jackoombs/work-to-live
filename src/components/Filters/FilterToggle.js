import { useEffect } from "react";
import { useState } from "react";
import EmployerTag from "../Employers/EmployerTag";

function FilterToggle(props) {

  const [isChecked, setIsChecked] = useState(true)

  const handleChange = (e) => {
    setIsChecked(value => !value)
    props.setFilters(filters => ({...filters, [props.tag]: !isChecked}))
  }

  return (
    <div className="switch-container">
      <EmployerTag tag={props.tag}/>
      <label className="switch">
        <input type="checkbox" onChange={handleChange} value={isChecked} checked={isChecked}/>
        <span className={`slider round ${props.tag}`}></span>
      </label>
    </div>
  )
}

export default FilterToggle