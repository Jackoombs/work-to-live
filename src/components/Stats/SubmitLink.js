import React from "react";
import { MdAddCircle } from "react-icons/md"
import { Link } from "react-router-dom"

function SubmitLink(props) {
  return (
    <li>
      <Link to="work-to-live/submit-employer">
        <MdAddCircle />
        Submit {props.field} data here
      </Link>
    </li>
  )
}

export default SubmitLink