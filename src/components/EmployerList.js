import Employer from "./Employer";

function EmployerList(props) {

  return (
    <section className="employee-list">
      {
        props.employerList.map((employer, index) => (
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