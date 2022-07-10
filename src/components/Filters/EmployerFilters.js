import React from "react";
import BestWorstFilters from "./BestWorstFilters";
import TagFilters from "./TagFilters"

function EmployerFilters(props) {
  return (
    <section className="filters">
      <h3>Filters</h3>
      <TagFilters 
        setFilters={props.setFilters}
      />
      <BestWorstFilters />
    </section>
  )
}

export default EmployerFilters