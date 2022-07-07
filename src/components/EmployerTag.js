import React from "react";

function EmployerTag({ tag }) {

  const tagColor = () => {
    if (tag === "FTSE") return "#CDF0EA"
    if (tag === "TECH") return "#F6C6EA"
    if (tag === "OTHER") return "#FAF4B7"
  }

  const tagStyle = {
    backgroundColor: tagColor()
  }

  return (
    <li style={tagStyle}>
      {tag}
    </li>
  )
}

export default EmployerTag