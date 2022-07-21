import React from "react";
import NavBar from "../NavBar/NavBar"
import Logo from "../../assets/images/logo.png"
import { Link } from "react-router-dom"

function Header() {

  return (
    <header>
      <Link className="logo" to="/work-to-live">
        <img src={Logo} alt="have a nice .life logo" />
      </Link>
      <NavBar />
      <Link  className="submit-employer" to="/work-to-live/submit-employer">Submit your<br />employer</Link>
    </header>
  )
}

export default Header