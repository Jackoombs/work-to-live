import Employer from "./Employer";

function EmployerList(props) {

  return (

    <section className="employee-list">
      {
        props.employerList.map((employer, index) => (
          <Employer 
            key={index}
            employer={employer}
            setEmployerList={props.setEmployerList}
            highestValues={props.highestValues}
            lowestValues={props.lowestValues}
          />
        ))
      }
    </section>
  )
}

export default EmployerList