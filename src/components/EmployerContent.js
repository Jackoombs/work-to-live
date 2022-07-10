import React, { useEffect, useState } from "react";
import EmployerList from "./Employers/EmployerList";
import EmployerFilters from "./Filters/EmployerFilters";
import axios from "axios";
import { SyncLoader } from "react-spinners";

function EmployerContent() {

  axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.REACT_APP_API_KEY}`;
  const [employerList, setEmployerList] = useState([{}])
  const [highestValues, setHighestValues] = useState()
  const [lowestValues, setLowestValues] = useState()
  const [filters, setFilters] = useState({FTSE:true, TECH: true, OTHER: true})

  useEffect(() => {
    const getEmployers = async () => {
      const response = await axios.get(`https://api.airtable.com/v0/appkdJJNhilwa8hyn/Table%201?maxRecords=200&view=LIVE`)
      const data = await response.data.records
      const oldEmployerArray = await data.map(list => list.fields)
      const newEmployerArray = await oldEmployerArray.map(employer => ({
        name: employer["Name of Company"],
        tags: employer["company type"],
        maternityLeave: employer["Maternity Leave - Weeks at full pay?"],
        paternityLeave: employer["Paternity - Weeks?"],
        pensionMatching: employer["Pension - Matching?"],
        pensionContribution: employer["Pension - Contributions"],
        holidayEntitlement: employer["Balance - Holiday days"]
      }))
      setEmployerList(newEmployerArray)
      getHighestValues(newEmployerArray)
      getLowestValues(newEmployerArray)
    }
    getEmployers()
  },[])

  useEffect(() => {
    if (highestValues && lowestValues) {
      const newEmployerList = [...employerList]
      const listWithScore = newEmployerList.map(e => ({...e, score: scoreCalc(e)}))
      listWithScore.sort((a, b) => {
        const x = a["score"]
        const y = b["score"]
        return ((x > y) ? -1 : ((x < y) ? 1: 0))
      })
      setEmployerList(listWithScore)
    }
  },[highestValues, lowestValues])

  const getHighestValues = (employer) => {
    const maternityLeave = getHighest(employer, "maternityLeave")
    const paternityLeave = getHighest(employer, "paternityLeave")
    const pensionContribution = getHighest(employer, "pensionContribution")
    const holidayEntitlement = getHighest(employer, "holidayEntitlement")

    setHighestValues({
      maternityLeave, 
      paternityLeave,
      pensionContribution,
      holidayEntitlement
    })
  }

  const getHighest = (employer, key) => {
    return Math.max(...employer.map(e => e[key]).filter(e => e !== undefined))
  }

  const getLowestValues = (employer) => {
    const maternityLeave = getLowest(employer, "maternityLeave")
    const paternityLeave = getLowest(employer, "paternityLeave")
    const pensionContribution = getLowest(employer, "pensionContribution")
    const holidayEntitlement = getLowest(employer, "holidayEntitlement")

    setLowestValues({
      maternityLeave, 
      paternityLeave,
      pensionContribution,
      holidayEntitlement
    })
  }

  const getLowest = (employer, key) => {
    return Math.min(...employer.map(e => e[key]).filter(e => e !== undefined))
  }

  const scoreCalc = (employer) => {
    const array = [
                    arrayScore(employer, "maternityLeave"), 
                    arrayScore(employer, "paternityLeave"), 
                    arrayScore(employer, "pensionContribution"), 
                    arrayScore(employer, "holidayEntitlement"), 
                  ]
    const filteredArray = array.filter(field => field === 0 || field)
    const total = filteredArray.reduce((pre, curr) => pre + curr, 0);
    return total ? Math.round(total / filteredArray.length * 100) : 0   
  }

  const arrayScore = (employer, key) => {
    return (employer[key] - lowestValues[key]) / (highestValues[key] - lowestValues[key])
  }

  return (

    <>
      { "score" in employerList[0]? 
        <>
          <EmployerFilters 
            setFilters={setFilters}
          />
          <EmployerList 
            employerList={employerList} 
            filters={filters}
          />
        </>
      : <div className="loader">
          <SyncLoader size="4rem" color="#091747"/>
        </div>}
    </>
    
  )
}

export default EmployerContent