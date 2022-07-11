import React from "react";

function SortButton(props) {

  const buttonText = () => {
    if (props.field === "score") return "life score"
    if (props.field === "pensionContribution") return "pension"
    if (props.field === "maternityLeave") return "maternity"
    if (props.field === "paternityLeave") return "paternity"
    if (props.field === "holidayEntitlement") return "holiday"
  }

  const handleClick = () => {
    props.setOrder({field: props.field, bestWorst: props.bestWorst})
  }

  const activeBtn = () => {
    if (props.order.field === props.field && props.order.bestWorst === props.bestWorst ) {
      return "active-sort"
    } else {
      return ""
    }
  }

  return (
    <li>
      <button className={`sort-btn ${activeBtn()}`}onClick={handleClick}>
        {buttonText()}
      </button>
    </li>
  )
}

export default SortButton