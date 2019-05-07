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
      doctorFullName: '',
      doctorEmail: '',
    };
    this.updateAppointmentsList = this.updateAppointmentsList.bind(this);
    this.handleDoctorNameClick = this.handleDoctorNameClick.bind(this);
  }

  componentDidMount() {
    $.ajax('/doctors')
      .done((data) => {
        this.setState({doctors: data});
      })
      .then(() => {
        this.updateAppointmentsList(0); // retrieves appointments of first doctor on list
      })
      .catch((err) => { throw err; });
  }
  
  updateAppointmentsList(index) {
    // retrieves appointments of individual doctor based on index of clicked doctor
    const doctorID = this.state.doctors[index].id;
    const doctor = this.state.doctors[index];
    const {firstname, lastname, email} = doctor;
    this.setState({
      doctorFullName: `Dr. ${firstname} ${lastname}`,
      doctorEmail: email
    });
    fetch(`/appointments/${doctorID}`)
    .then((response) => {
      return response.json(); // this returns a promise
    })
    .then((res) => {
      this.setState({appointments: res});
    })
  }
  
  handleDoctorNameClick(event) {
    console.log(event.target);
    const doctorIndex = (event.target.id);
    this.updateAppointmentsList(doctorIndex);
    //TODO: NEED TO CHANGE COLOR OF CLICKED ITEM
  }

  render() {
    return (
      <div>
        <DoctorsList doctors={this.state.doctors}
          handleDoctorNameClick={this.handleDoctorNameClick}
          id='doctorsList' />
        <Appointments appointments={this.state.appointments}
          doctor={this.state.doctorFullName}
          email={this.state.doctorEmail} />
      </div>
    );
  }
}

export default App;
