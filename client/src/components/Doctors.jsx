import React from 'react';

const Doctor = (props) => {
  const classname = props.selectedDoctorIndex === props.index ? "selected-doctor doctor-bullets" : "doctor-bullets";
  return (
    <li className={classname}
      onClick = {(event) =>
        {props.handleDoctorNameClick(event.target.id)
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
      <h1 id='logo'> Seattle Grace</h1>
      <h3>PHYSICIANS</h3>
      <ul>
        {props.doctors.map((doctor, index)=> {
          return (
            <Doctor doctor={doctor}
              key={doctor.email}
              index={index}
              selectedDoctorIndex={props.selectedDoctorIndex}
              handleDoctorNameClick={props.handleDoctorNameClick}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default DoctorsList;
