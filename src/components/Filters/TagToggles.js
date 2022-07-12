import React from "react";
import Toggle from "./Toggle"

function TagToggles(props) {

  const tags = ["FTSE", "TECH", "OTHER"]

  return (
    <div className="toggles">
      <h3>filter by type...</h3>
      <div className="switches">
        {tags.map ((tag, index) => (
          <Toggle 
            key={index}
            tag={tag}
            setFilters={props.setFilters}
          />
        ))}
      </div>
    </div>
  )
}

export default TagToggles