import React, { useEffect, useState } from "react";
import NavLink from "./NavLink";

function NavLinks() {

  const [showMenu, setShowMenu] = useState()

  useEffect(() => {
    setTimeout(() => {
      setShowMenu("show-menu")
    },1)
  },[])

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
    <ul className={showMenu}>
      {links.map((link, index) => (
        <NavLink
          key={index}
          index={(index+1) / 2}
          link={link}
        />
      ))}
    </ul>
  )
}

export default NavLinks