import React from "react";
import EmployerTags from "./EmployerTags";
import EmployerStats from "./EmployerStats";
import EmployerScore from "./EmployerScore";

function Employer({ employer }) {
  return (
    <div className="employer">
      <EmployerTags 
        name={employer.name}
        tags={employer.tags}
      />
      <EmployerStats 
        employer={employer}
      />
      <EmployerScore 
        employer={employer}
      />
    </div>
  )
}

export default Employer