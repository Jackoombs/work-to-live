import React, { useState, useEffect } from "react";

function NavLink(props) {

  const [animationClass, setAnimationClass] = useState()

  useEffect(() => {
    setTimeout(() => {
      setAnimationClass("show-link")
    },props.index * 300)
  },[props.index])

  return (
    <li className={animationClass}>
      <a href={props.link.link}>{props.link.text}</a>
    </li>
  )
}

export default NavLink