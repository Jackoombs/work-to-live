import React from "react";
import BestWorstFilters from "./BestWorstFilters";
import TagToggles from "./TagToggles"

function EmployerFilters(props) {
  return (
    <section className="filters">
      <TagToggles
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