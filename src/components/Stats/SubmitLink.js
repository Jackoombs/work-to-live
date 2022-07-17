import React from "react";
import { MdAddCircle } from "react-icons/md"

function SubmitLink(props) {
  return (
    <li>
      <a href="">
        <MdAddCircle />
        Submit {props.field} data here
      </a>
    </li>
  )
}

export default SubmitLink