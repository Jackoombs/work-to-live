import React from "react";
import EmployerTags from "./EmployerTags";
import EmployerStats from "./EmployerStats";
import EmployerScore from "./EmployerScore";

function EmployerCard(props) {

  return (
    <div className="employer">
      <EmployerTags 
        name={props.employer.name}
        tags={props.employer.tags}
      />
      <EmployerStats 
        employer={props.employer}
      />
      <EmployerScore 
        employer={props.employer}
      />
    </div>
  )
}

export default EmployerCard