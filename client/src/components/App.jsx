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
      selectedDoctor:{},
      selectedDoctorIndex: null,
    };
    this.updateAppointmentsList = this.updateAppointmentsList.bind(this);
    this.handleDoctorNameClick = this.handleDoctorNameClick.bind(this);
  }

  componentDidMount() {
    $.ajax('/doctors')
      .done((data) => {
        this.setState({doctors: data});
      })
      .then(() => { // retrieves appointments of first doctor on list
        this.updateAppointmentsList(0);
      })
      .catch((err) => { throw err; });
  }
  
  updateAppointmentsList(index) {
    // retrieves appointments of individual doctor based on index of clicked doctor
    if (this.state.doctors.length) {
      const doctor = this.state.doctors[index];
      const doctorID = doctor.id;
      this.setState({
        selectedDoctor: doctor,
      });
      fetch(`/appointments/${doctorID}`)
      .then((response) => {
        return response.json(); // this returns a promise
      })
      .then((res) => {
        this.setState({appointments: res});
      })
    }
  }
  
  handleDoctorNameClick(event) {
    const doctorIndex = Number(event.target.id);
    this.setState({
      selectedDoctorIndex: doctorIndex  // this enables conditional class-naming of doctor names for styling purpose
    });
    this.updateAppointmentsList(doctorIndex);
  }

  render() {
    const {firstname, lastname, email} = this.state.selectedDoctor;
    const doctorFullName = `Dr. ${firstname} ${lastname}`
    return (
      <div>
        <DoctorsList doctors={this.state.doctors}
          selectedDoctorIndex={this.state.selectedDoctorIndex}
          handleDoctorNameClick={this.handleDoctorNameClick}
          id='doctorsList' />
        <Appointments appointments={this.state.appointments}
          doctor={doctorFullName}
          email={email} />
      </div>
    );
  }
}

export default App;
