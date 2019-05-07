import React from 'react';

const Doctors = (props) => {
  const doctors = props.doctors;
  return (
    <div id='doctors-panel'>
      <h1 id='notable-logo'>notable</h1>
      <h3>PHYSICIANS</h3>
      <ul>
        {doctors.map((doctor, index) => {
          return (
            <li className="doctor-bullets"
            key={index}
            id={index}
            onClick = {(e) => {props.handleDoctorNameClick(e)}}
            > {doctor.lastname}, {doctor.firstname} </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Doctors;
