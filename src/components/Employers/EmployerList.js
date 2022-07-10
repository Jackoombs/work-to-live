import { useEffect } from "react";
import { useState } from "react";
import Employer from "./Employer";

function EmployerList(props) {

  const [filteredList, setFilteredList] = useState()

  useEffect(() => {
    const oldList = [...props.employerList]
    const newList = removeUnwantedTags(oldList)
    setFilteredList(newList)
  },[props.filters])

  const removeUnwantedTags = (employers) => {
    const unwantedTags = []
    for (const tag in props.filters) {
      if (!props.filters[tag]) {
        unwantedTags.push(tag)
      }
    }

    const filteredList = employers.filter(employer => {
      for (const tag of employer.tags) {
        if (!unwantedTags.includes(tag)) return true
      } 
    })
    return filteredList
  }
  

  return (
    <section className="employee-list">
      {
        filteredList &&
        filteredList.map((employer, index) => (
          <Employer 
            key={index}
            employer={employer}
          />
        ))
      }
    </section>
  )
}

export default EmployerList