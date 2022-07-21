import React, { useState } from "react";
import Modal from "./Modal";
import { TbArrowsUpDown } from "react-icons/tb"
import { BsToggles } from "react-icons/bs"
import { Link } from "react-router-dom"

function MobileFilters(props) {

  const [openFilter, setOpenFilter] = useState(false)
  const [openSort, setOpenSort] = useState(false)

  const handleClick = (e) => {
    if (e.target.textContent === "Filter") {
      setOpenFilter(true)
    } else {
      setOpenSort(true)
    }
  }

  return (
    <section className="mobile-filters">
      <Link 
        className="submit-employer"
        to="/submit-employer">
        Submit your employer
      </Link>

      <button className="sort-btn" onClick={handleClick}>
        <BsToggles size="1.5rem"/>
        Filter
      </button>
      <button className="sort-btn" onClick={handleClick}>
        <TbArrowsUpDown size="1.5rem"/>
        Sort
      </button>

      {openFilter && 
        <Modal 
          setFilters={props.setFilters} 
          type="filter" 
          setModalOpen={setOpenFilter}
        />}
      {openSort &&
        <Modal 
          order={props.order}
          setOrder={props.setOrder}
          setFilters={props.setFilters} 
          type="sort" 
          setModalOpen={setOpenSort}
        />}
    </section>
  )
}

export default MobileFilters