import React, { useEffect, useState } from "react";
import EmployerList from "./EmployerList";
import EmployerFilters from "./EmployerFilters";
import axios from "axios";
import { SyncLoader } from "react-spinners";

function EmployerContent() {

  axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.REACT_APP_API_KEY}`;
  const [employerList, setEmployerList] = useState()

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


  return (

    <>
      { employerList ? 
        <>
          <EmployerFilters />
          <EmployerList employerList={employerList}/>
        </>
      : <div className="loader">
          <SyncLoader size="4rem" color="#091747"/>
        </div>}
    </>
    
  )
}

export default EmployerContent