/**
 * using both AJAX and FETCH requests here
 * to keep both methods logged for future ref
 */
import React from 'react';
import $ from 'jquery';
import DoctorsList from './Doctors.jsx';
import Appointments from './Appointments.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doctors: [],
      appointments: [],
      selectedDoctor: {},
      selectedDoctorIndex: null,
    };
    this.updateAppointmentsList = this.updateAppointmentsList.bind(this);
    this.handleDoctorNameClick = this.handleDoctorNameClick.bind(this);
    this.handleCancellation = this.handleCancellation.bind(this);
  }

  //Maintain consistency. I would recommend sticking with fetch and not jQuery.
  //Also from my undersatnding the done only applies to ajax and then only applies to promises. 
  //however ajax is not a promise. People rarely ever use AJAX in React these days. 
  componentDidMount() {
    $.ajax('/doctors')
      .done((data) => {
        this.setState({doctors: data});
      })
      .then(() => { // retrieves appointments of first doctor on list
        if (this.state.doctors.length) {
          this.updateAppointmentsList(0);
        }
      })
      .catch((err) => { throw err; });
  }
  
  // retrieves appointments of individual doctor based on index of clicked doctor
  updateAppointmentsList(docIndex) {
    const doctor = this.state.doctors[docIndex];
    const doctorID = doctor.id;
    this.setState({
      selectedDoctor: doctor,
    });
    fetch(`/appointments/${doctorID}`)
      .then((response) => {
        return response.json(); // this returns a promise
      })
      .then((data) => {
        this.setState({appointments: data});
      });
  }
  
  handleDoctorNameClick(clickedDoctorIndex) {
    const selectedDoctorIndex = Number(clickedDoctorIndex);
    this.setState({
      selectedDoctorIndex  // this enables conditional class-naming of doctor names for styling purpose
    });
    this.updateAppointmentsList(selectedDoctorIndex);
  }

  handleCancellation(appointmentIndex) {
    const appointment = this.state.appointments[appointmentIndex];
    const appointmentID = appointment.id;

    fetch('/appointments', {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({appointmentID}) //data must be sent as JSON object
    })
    .then((res) => {
      if (res.status === 200) {
        this.updateAppointmentsList(this.state.selectedDoctorIndex);
        console.log('Appointment Canceled');
        // TODO: handle appointment cancellation confirmation
      };
    })
    .catch((error) => {
      console.log('unable to cancel appointment');
    })
  }

  render() {
    const {firstname, lastname, email} = this.state.selectedDoctor;
    const doctorFullName = `Dr. ${firstname} ${lastname}`
    return (
      <div>
        <DoctorsList 
          doctors={this.state.doctors}
          selectedDoctorIndex={this.state.selectedDoctorIndex}
          handleDoctorNameClick={this.handleDoctorNameClick}
        />
        <Appointments 
          appointments={this.state.appointments}
          doctor={doctorFullName}
          email={email}
          handleCancellation={this.handleCancellation}
        />
      </div>
    );
  }
}

export default App;
