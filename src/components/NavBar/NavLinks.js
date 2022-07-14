import React, { useEffect, useState } from "react";
import NavLink from "./NavLink";
import { motion } from "framer-motion"

function NavLinks() {

  const links = [
    {
      link: "/", 
      text: "Big Employers"
    },
    {
      link: "/", 
      text: "Standouts"
    },
    {
      link: "/", 
      text: "About"
    }
  ]

  return (
    <motion.ul
      className="modal-content"
      initial={{y: -100, opacity: 0}}
      style={{ originY: 0 }}
      transition={{ duration: 0.6, type: "spring", bounce: 0.4}}
      animate={{ y: 0, opacity: 1 }}
    >
      {links.map((link, index) => (
        <NavLink
          key={index}
          index={index}
          link={link}
        />
      ))}
    </motion.ul>
  )
}

export default NavLinks