import React from 'react';

const Appointments = (props) => {
  const timeformat = 'TIME_FORMAT(time, \'%h:%i%p\'\)'
  if (!props.appointments.length) {
    return (
      <h1>Please Select a Physician to View Calendar.</h1>
    )
  }
  return (
    <div id='appointments-panel'>
      <h1>{props.doctor}</h1>
      <h3>{props.email}</h3>
      <table id='appointments-table'>
        <thead>
          <tr className='appointment-headers'>
            <th>#</th>
            <th>Patient</th>
            <th>Time</th>
            <th>Kind</th>
          </tr>
        </thead>
        <tbody>
          {props.appointments.map((appointment, index) => {
            return (
              <tr className='appointment-rows'
              key={index+1}>
                <td>{index+1}</td>
                <td>{appointment.patient}</td>
                <td>{appointment[timeformat]}</td>
                <td>{appointment.kind}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Appointments;
