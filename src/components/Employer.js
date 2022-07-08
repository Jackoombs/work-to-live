import React from "react";
import EmployerTags from "./EmployerTags";
import EmployerStats from "./EmployerStats";
import EmployerScore from "./EmployerScore";

function Employer({ employer, setEmployerList, highestValues, lowestValues }) {
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
        setEmployerList={setEmployerList}
        highestValues={highestValues}
        lowestValues={lowestValues}
      />
    </div>
  )
}

export default Employer