import React from "react";
import TagToggles from "./TagToggles";
import BestWorstFilters from "./BestWorstFilters"
import { HiOutlineX } from "react-icons/hi"

function Modal(props) {

  const handleClick = (e) => {
    props.setModalOpen(false)
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-modal" onClick={handleClick}>
          <HiOutlineX size="4rem"/>
        </button>
        {props.type === "filter" && <TagToggles setFitlers={props.setFilters}/>}
        {props.type === "sort" && <BestWorstFilters order={props.order} setOrder={props.setOrder}/>}
      </div>
    </div>
  )
}

export default Modal