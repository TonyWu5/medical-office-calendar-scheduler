import React from 'react';
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
      displayMakeAppointmentButton: false
    };
    this.updateAppointmentsList = this.updateAppointmentsList.bind(this);
    this.handleDoctorNameClick = this.handleDoctorNameClick.bind(this);
    this.handleNewAppointmentButtonClick = this.handleNewAppointmentButtonClick.bind(this);
    this.handleCancellation = this.handleCancellation.bind(this);
    this.handleNewAppointmentSubmission = this.handleNewAppointmentSubmission.bind(this);
  }

  componentDidMount() {
    fetch('/doctors')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
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
      displayMakeAppointmentButton: true
    });
    fetch(`/appointments/${doctorID}`)
    .then((res) => {
      return res.json(); // this returns a promise
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

  handleNewAppointmentButtonClick() {
    this.setState({displayMakeAppointmentButton: false});
  }

  handleNewAppointmentSubmission(event, patient, time, kind, date) {
    event.preventDefault();
    const doctorID = this.state.selectedDoctor.id;
    fetch('/appointments', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({doctorID, patient, time, kind, date})
    })
    .then((res) => {
      if (res.status === 200) {
        this.updateAppointmentsList(this.state.selectedDoctorIndex);
      }
    })
    .catch((err) => {
      throw err;
    })
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
      };
    })
    .catch((err) => {
      throw err;
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
          handleNewAppointmentButtonClick={this.handleNewAppointmentButtonClick}
          displayMakeAppointmentButton={this.state.displayMakeAppointmentButton}
          handleNewAppointmentSubmission={this.handleNewAppointmentSubmission}
        />
      </div>
    );
  }
}

export default App;
