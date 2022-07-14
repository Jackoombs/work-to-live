import React from "react";
import {IoIosCheckbox} from "react-icons/io"

function BooleanStat({ text }) {
  return (
    <li>
        <IoIosCheckbox color="green"/>
        {text}
    </li>
  )
}

export default BooleanStat