import React from "react";

function EmployerTag({ tag, tagColors }) {

  const tagStyle = {
    backgroundColor: tagColors[tag]
  }

  return (
    <li style={tagStyle}>
      {tag}
    </li>
  )
}

export default EmployerTag