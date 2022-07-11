import React from "react";
import FilterToggle from "./FilterToggle"

function EmployerFilters(props) {

  const tags = ["FTSE", "TECH", "OTHER"]

  return (
    <div className="toggles">
      <h3>filter by type...</h3>
      <div className="switches">
        {tags.map ((tag, index) => (
          <FilterToggle 
            key={index}
            tag={tag}
            setFilters={props.setFilters}
          />
        ))}
      </div>
    </div>
  )
}

export default EmployerFilters