import React, { useEffect, useState } from "react";
import EmployerList from "./EmployerList";
import EmployerFilters from "./EmployerFilters";
import axios from "axios";
import { SyncLoader } from "react-spinners";

function EmployerContent() {

  axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.REACT_APP_API_KEY}`;
  const [employerList, setEmployerList] = useState()
  const [highestValues, setHighestValues] = useState()
  const [lowestValues, setLowestValues] = useState()

  useEffect(() => {
    const getCompanys = async () => {
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
    }
    getCompanys()
  },[])

  useEffect(() => {
    if (employerList) {
      getHighestValues()
      getLowestValues()
    }
  },[employerList])

  const getHighestValues = () => {
    const maternityLeave = getHighest("maternityLeave")
    const paternityLeave = getHighest("paternityLeave")
    const pensionContribution = getHighest("pensionContribution")
    const holidayEntitlement = getHighest("holidayEntitlement")

    setHighestValues({
      maternityLeave, 
      paternityLeave,
      pensionContribution,
      holidayEntitlement
    })
  }

  const getHighest = (key) => {
    return Math.max(...employerList.map(e => e[key]).filter(e => e !== undefined))
  }

  const getLowestValues = () => {
    const maternityLeave = getLowest("maternityLeave")
    const paternityLeave = getLowest("paternityLeave")
    const pensionContribution = getLowest("pensionContribution")
    const holidayEntitlement = getLowest("holidayEntitlement")

    setLowestValues({
      maternityLeave, 
      paternityLeave,
      pensionContribution,
      holidayEntitlement
    })
  }

  const getLowest = (key) => {
    return Math.min(...employerList.map(e => e[key]).filter(e => e !== undefined))
  }

  return (

    <>
      { employerList && highestValues && lowestValues? 
        <>
          <EmployerFilters />
          <EmployerList 
            employerList={employerList} 
            setEmployerList={setEmployerList}
            highestValues={highestValues}
            lowestValues={lowestValues}
          />
        </>
      : <div className="loader">
          <SyncLoader size="4rem" color="#091747"/>
        </div>}
    </>
    
  )
}

export default EmployerContent