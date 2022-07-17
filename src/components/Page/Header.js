import React from "react";
import NavBar from "../NavBar/NavBar"
import Logo from "../../assets/images/logo.png"
import { Link } from "react-router-dom"

function Header() {

  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="have a nice .life logo" />
      </div>
      <NavBar />
      <Link  className="submit-employer" to="/work-to-live/submit-employer">Sumbit your<br />employer</Link>
    </header>
  )
}

export default Header