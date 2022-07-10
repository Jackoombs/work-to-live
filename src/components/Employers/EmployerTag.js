import React from "react";

function EmployerTag({ tag }) {

  return (
    <p className={`tag ${tag}`}>{tag}</p>
  )
}

export default EmployerTag