import React from 'react';

/** Include the thead  */
const AppointmentHeaders = () => {
  return (
    <tr className='appointment-headers'>
      <th>#</th>
      <th>Patient</th>
      <th>Time</th>
      <th>Kind</th>
      <th>Cancel</th>
    </tr>
  );
}

const CancelAppointmentButton = (props) => {
  return (
    <button
    type='button'
    className='cancel-button'
    id={props.index}
    testname='test' // onClick console.logging of this attribute returns undefined
    onClick = {(event) => props.handleCancellation(event.target.id)}> X </button>
  );
}

const AppointmentRows = (props) => {
  const timeformat = 'TIME_FORMAT(time, \'%h:%i%p\'\)'
  return (
    <tr className={'appointment-rows'+props.index%2}>
      <td>{props.index+1}</td>
      <td>{props.appointment.patient}</td>
      <td>{props.appointment[timeformat]}</td>
      <td>{props.appointment.kind}</td>
      <td>
        <CancelAppointmentButton
          index={props.index}
          handleCancellation={props.handleCancellation}
          />
      </td>
    </tr>
  )
}


const Appointments = (props) => {
  return (
    <div id='appointments-panel'>
      <h1>{props.doctor}</h1>
      <h3>{props.email}</h3>
      <table id='appointments-table'>
        <thead>
          <AppointmentHeaders />
        </thead>
        <tbody>
          {props.appointments.map((appointment, index) => {
            return (
              <AppointmentRows
                appointment={appointment}
                index={index}
                key={index}
                handleCancellation={props.handleCancellation}
                />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Appointments;
