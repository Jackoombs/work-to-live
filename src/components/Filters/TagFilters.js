import React from "react";
import FilterToggle from "./FilterToggle"

function EmployerFilters(props) {

  const tags = ["FTSE", "TECH", "OTHER"]

  return (
    <div className="toggles">
      {tags.map ((tag, index) => (
        <FilterToggle 
          key={index}
          tag={tag}
          setFilters={props.setFilters}
        />
      ))}
    </div>
  )
}

export default EmployerFilters