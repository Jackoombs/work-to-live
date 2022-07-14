import React from "react";
import Filters from "./Filters";
import MobileFilters from "./MobileFilters";

function FilterSection(props) {

  return (
    <>
      <Filters 
        setFilters={props.setFilters}
        order={props.order}
        setOrder={props.setOrder}
      />
      <MobileFilters 
        setFilters={props.setFilters}
        order={props.order}
        setOrder={props.setOrder}
      />
    </>
  )
}

export default FilterSection