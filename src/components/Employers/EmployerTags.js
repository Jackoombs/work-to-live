import React from "react";
import EmployerTag from "./EmployerTag";

function EmployerTags(props) {

  const logoLink = () => {
    return `https://logo.clearbit.com/${props.name.replace(/ /g, "")}.com?size=250`
  }

  return (
    <div className="employer-tags">
      <h3>{props.name}</h3>
      <div className="tags">
        {props.tags.map((tag, index) => (
          <EmployerTag 
            key={index}
            tag={tag}
          />
        ))}
      </div>
      <img src={logoLink()} alt="" />
    </div>
  )
}

export default EmployerTags