import React, { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import NavLinks from "./NavLinks";

function MobileNavigation() {

  const [menuOpen, setMenuOpen] = useState(false)

  const handleClick = () => {
    setMenuOpen(menuOpen => !menuOpen)
  }

  return (
    <nav className="mobile-nav">
      <button onClick={handleClick}>
        {menuOpen
          ? <HiOutlineX size={"6rem"} />
          : <HiOutlineMenu size={"6rem"}/>
      }
        
      </button>
      {menuOpen && <NavLinks />}
    </nav>
  )
}

export default MobileNavigation