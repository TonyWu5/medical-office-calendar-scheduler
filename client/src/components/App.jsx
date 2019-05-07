import React from 'react';
import $ from 'jquery';
import Doctors from './Doctors.jsx';
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
  }

  componentDidMount() {
    $.ajax('/doctors')
      .done((data) => {
        this.setState({doctors: data});
      })
      .catch((err) => { throw err; });
    fetch('/appointments')
  }

  updateAppointmentsList(index) {
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

  render() {
    return (
      <div>
        <Doctors doctors={this.state.doctors}
          updateAppointmentsList={this.updateAppointmentsList}
          id='doctorsList' />
        <Appointments appointments={this.state.appointments}
          doctor={this.state.doctorFullName}
          email={this.state.doctorEmail} />
      </div>
    );
  }
}

export default App;
