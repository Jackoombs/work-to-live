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
          color={props.tagColors[tag]}
        />
      ))}
    </div>
  )
}

export default EmployerFilters