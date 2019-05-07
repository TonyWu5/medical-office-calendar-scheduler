import React from 'react';

const Doctors = (props) => {
  const doctors = props.doctors;
  return (
    <div id='doctors-panel'>
      <h1>notable</h1>
      <h3>PHYSICIANS</h3>
      <ul>
        {doctors.map((doctor, index) => {
          return (
            <li className="doctor-bullets"
            key={index}
            onClick = {() => {props.updateAppointmentsList(index)}}
            > {doctor.lastname}, {doctor.firstname} </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Doctors;
