import React from "react";
import SortList from "./SortList";

function BestWorstFilters(props) {
  return (
    <div className="best-worst">
      <SortList 
        bestWorst={"best"}
        order={props.order}
        setOrder={props.setOrder}
      />
      <SortList 
        bestWorst={"worst"}
        order={props.order}
        setOrder={props.setOrder}
      />
    </div>
  )
}

export default BestWorstFilters