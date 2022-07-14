import React from "react";
import PensionStat from "../Stats/PensionStat";
import ParentalStat from "../Stats/ParentalStat";
import BalanceStat from "../Stats/BalanceStat";



function EmployerStats({ employer }) {



  return (
    <div className="employer-stats">
      <PensionStat employer={employer} />
      <ParentalStat employer={employer}/>
      <BalanceStat employer={employer}/>
    </div>
  )
}

export default EmployerStats