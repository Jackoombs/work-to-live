import React from "react";
import {IoIosCheckbox} from "react-icons/io"

function BooleanStat({ text }) {
  return (
    <li>
        <IoIosCheckbox color="green" size="1.4rem"/>
        {text}
    </li>
  )
}

export default BooleanStat