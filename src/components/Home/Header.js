import React from "react";
import NavBar from "../NavBar/NavBar"
import Logo from "../../assets/images/logo.png"

function Header() {

  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="have a nice .life logo" />
      </div>
      <NavBar />
      <a  className="submit-employer" href="">Sumbit your<br />employer</a>
    </header>
  )
}

export default Header