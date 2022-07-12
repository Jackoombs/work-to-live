import React from "react";
import NavBar from "../NavBar/NavBar"

function Header() {

  return (
    <header>
      <div className="logo">
        <p>have<br />a nice<br/>.life</p>
      </div>
      <NavBar />
      <a  className="submit-employer" href="">Sumbit your<br />employer</a>
    </header>
  )
}

export default Header