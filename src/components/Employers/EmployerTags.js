import React from "react";
import EmployerTag from "./EmployerTag";

function EmployerTags(props) {

  return (
    <div className="employer-tags">
      <h3>{props.name}</h3>
        {props.tags.map((tag, index) => (
          <EmployerTag 
            key={index}
            tag={tag}
          />
        ))}
    </div>
  )
}

export default EmployerTags