import React from 'react';

/**
 * Generally speaking we don't want to name a component Doctor. 
 * Usually we want to name it as ListItem or something. 
 * Likewise same goes for DoctorsList. I can definitely see that there will be a need for resuable list 
 * components. Also recommend using propTypes.
 */
const Doctor = (props) => {
  const classname = props.selectedDoctorIndex === props.index ? "selected-doctor doctor-bullets" : "doctor-bullets";
  return (
    <li className={classname}
      onClick = {(event) => {
        props.handleDoctorNameClick(event.target.id)
      }}
      //TODO: instead of using id tag, need to find a diff way to set unique index for Doctor
      id={props.index}
      > 
      {props.doctor.lastname}, {props.doctor.firstname}
    </li>
  );
};

const DoctorsList = (props) => {
  return (
    <div id='doctors-panel'>
      <h1 id='notable-logo'>notable</h1>
      <h3>PHYSICIANS</h3>
      <ul>
        {props.doctors.map((doctor, index)=> {
          return (
            <Doctor 
              doctor={doctor}
              key={doctor.email}
              index={index}
              selectedDoctorIndex={props.selectedDoctorIndex}
              handleDoctorNameClick={props.handleDoctorNameClick}
            />
          )
        })}
      </ul>
    </div>
  );
}

export default DoctorsList;
