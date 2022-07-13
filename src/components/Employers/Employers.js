import React, { useEffect, useState } from "react";
import EmployerList from "./EmployerList";
import EmployerFilters from "../Filters/EmployerFilters";
import axios from "axios";
import { SyncLoader } from "react-spinners";

function EmployerContent() {

  axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.REACT_APP_API_KEY}`;
  const [employerList, setEmployerList] = useState([{}])
  const [highestValues, setHighestValues] = useState()
  const [lowestValues, setLowestValues] = useState()
  const [averageValues, setAverageValues] =useState()
  const [filters, setFilters] = useState({FTSE:true, TECH: true, OTHER: true})
  const [order, setOrder] = useState({field: "score", bestWorst: "best"})

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
      getAverageValues(newEmployerArray)
    }
    getEmployers()
  },[])

  useEffect(() => {
    if (highestValues && lowestValues) {
      const newEmployerList = [...employerList]
      const listWithScore = newEmployerList.map(e => ({...e, score: scoreCalc(e)}))
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

  const getAverageValues = (employer) => {
    const maternityLeave = getAverage(employer, "maternityLeave")
    const paternityLeave = getAverage(employer, "paternityLeave")
    const pensionContribution = getAverage(employer, "pensionContribution")
    const holidayEntitlement = getAverage(employer, "holidayEntitlement")

    setAverageValues({
      maternityLeave, 
      paternityLeave,
      pensionContribution,
      holidayEntitlement
    })
  }

  const getAverage = (employer, key) => {
    const filteredArray = employer
      .filter(e => e[key] !== undefined)
      .map(e => e[key])
    return filteredArray.reduce((a, b) => (a + b)) / filteredArray.length
  }

  const scoreCalc = (employer) => {
    const array = [
                    arrayScore(employer, "maternityLeave"), 
                    arrayScore(employer, "paternityLeave"), 
                    arrayScore(employer, "pensionContribution"), 
                    arrayScore(employer, "holidayEntitlement"), 
                  ]
    const isNA = checkNA(array)
    if (isNA) return "N/A"

    // for (let i=0; i<array.length; i++) {
    //   if (isNaN(array[i])){
    //     array[i] = 0.5
    //   }
    // }
    const filteredArray = array.filter(e => !isNaN(e))
    console.log(employer.name, array)
    const total = filteredArray.reduce((pre, curr) => pre + curr, 0);
    return Math.round(total / filteredArray.length * 100)
  }

  const arrayScore = (employer, key) => {
    return (employer[key] - lowestValues[key]) / (highestValues[key] - lowestValues[key])
  }

  const checkNA = (array) => {
    const validValues = array.filter(e => !isNaN(e))
    return validValues <= 1 ? true : false
  }

  return (

    <>
      { "score" in employerList[0]? 
        <>
          <EmployerFilters 
            setFilters={setFilters}
            order={order}
            setOrder={setOrder}
          />
          <EmployerList 
            employerList={employerList} 
            filters={filters}
            order={order}
            setOrder={setOrder}
          />
        </>
      : <div className="loader">
          <SyncLoader size="4rem" color="#091747"/>
        </div>}
    </>
    
  )
}

export default EmployerContent