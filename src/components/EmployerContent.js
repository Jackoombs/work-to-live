import React, { useState } from "react";
import EmployerList from "./EmployerList";
import EmployerFilters from "./EmployerFilters";

function EmployerContent() {

  const [employerList, setemployerList] = useState([
    {
      "name": "BP",
      "tags": ["FTSE"],
      "maternityLeave": 26,
      "paternityLeave": 13,
      "pensionMatching": true,
      "pensionContribution": 10,
      "holidayEntitlement": 25
    },
    {
      "name": "Vodafone",
      "tags": ["FTSE", "TECH"],
      "maternityLeave": 12,
      "paternityLeave": 2,
      "pensionMatching": true,
      "pensionContribution": 6,
      "holidayEntitlement": 30
    }
  ])

  return (
    <>
      <EmployerFilters />
      <EmployerList 
        employerList={employerList}
      />
    </>
  )
}

export default EmployerContent