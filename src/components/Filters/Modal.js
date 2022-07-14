import React from "react";
import TagToggles from "./TagToggles";
import BestWorstFilters from "./BestWorstFilters"
import { motion } from "framer-motion"
import { HiOutlineX } from "react-icons/hi"

function Modal(props) {

  const handleClick = (e) => {
    props.setModalOpen(false)
  }

  return (
    <div className="modal">
      <motion.div 
        className="modal-content"
        initial={{
          scaleY: 0.1
        }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.4}}
        animate={{ scaleY: 1 }}
      >
        <button className="close-modal" onClick={handleClick}>
          <HiOutlineX size="4rem"/>
        </button>
        {props.type === "filter" && <TagToggles setFilters={props.setFilters}/>}
        {props.type === "sort" && <BestWorstFilters order={props.order} setOrder={props.setOrder}/>}
      </motion.div>
    </div>
  )
}

export default Modal