import { useEffect } from "react";
import { useState } from "react";
import Employer from "./Employer";

function EmployerList(props) {

  const [filteredList, setFilteredList] = useState()

  useEffect(() => {
    const oldList = [...props.employerList]
    let newList = removeUnwantedTags(oldList)
    sortList(newList, props.order.field)

    if (props.order.bestWorst === "worst") {
      newList = reverseList(newList, props.order.field)
    }
    setFilteredList(newList)
  },[props.filters, props.order])

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

  const sortList = (list, key) => {
    list.sort((a, b) => {
      const x = a[key] || 0
      const y = b[key] || 0
      return ((x > y) ? -1 : ((x < y) ? 1: 0))
    })
  }

  const reverseList = (list, field) => {
    list.reverse()
    const accept=[]
    const reject=[]
    for (const e of list) {
      e[field] ? accept.push(e) : reject.push(e)
    }
    return accept.concat(reject)
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