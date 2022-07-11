import React from "react";
import SortButton from "./SortButton";

function SortList(props) {

  const fields = ["score", "pensionContribution", "maternityLeave", "paternityLeave", "holidayEntitlement"]

  return (
    <div className="sort-container">
      <h3>{props.bestWorst} for...</h3>
      <ul>
        {fields.map((field, index) => (
          <SortButton 
            key={index}
            field={field}
            bestWorst={props.bestWorst}
            order={props.order}
            setOrder={props.setOrder}
          />
        ))}
      </ul>
    </div>
  )
}

export default SortList