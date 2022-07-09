import React from "react";
import EmployerTags from "./EmployerTags";
import EmployerStats from "./EmployerStats";
import EmployerScore from "./EmployerScore";

function Employer(props) {

  return (
    <div className="employer">
      <EmployerTags 
        name={props.employer.name}
        tags={props.employer.tags}
        tagColors={props.tagColors}
      />
      <EmployerStats 
        employer={props.employer}
      />
      <EmployerScore 
        employer={props.employer}
        setEmployerList={props.setEmployerList}
        highestValues={props.highestValues}
        lowestValues={props.lowestValues}
      />
    </div>
  )
}

export default Employer