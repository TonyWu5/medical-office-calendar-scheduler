import React from 'react';

const Doctor = (props) => {
  return (
    <li className="doctor-bullets"
      onClick = {(e) => {props.handleDoctorNameClick(e)}}
      id={props.index}
      > {props.doctor.lastname}, {props.doctor.firstname}
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
            <Doctor doctor={doctor}
            key={doctor.email}
            index={index}
            handleDoctorNameClick={props.handleDoctorNameClick}
            />
          )
        })}
      </ul>
    </div>
  );
}

export default DoctorsList;
