import React from "react";
import BestWorstFilters from "./BestWorstFilters";
import TagFilters from "./TagFilters"

function EmployerFilters(props) {
  return (
    <section className="filters">
      <TagFilters 
        setFilters={props.setFilters}
      />
      <BestWorstFilters 
        order={props.order}
        setOrder={props.setOrder}
      />
    </section>
  )
}

export default EmployerFilters