import React from "react";
import BestWorstFilters from "./BestWorstFilters";
import TagFilters from "./TagFilters"

function EmployerFilters(props) {
  return (
    <section>
      <TagFilters 
        tagColors={props.tagColors}
      />
      <BestWorstFilters />
    </section>
  )
}

export default EmployerFilters