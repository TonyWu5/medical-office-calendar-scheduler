import React from 'react';

const MakeAppointmentButton = (props) => {
  const classname = props.displayMakeAppointmentButton ? 'displayed' : 'hidden';
  return (
    <button id='make-appointment-button'
      className={classname}
      onClick={() => props.handleNewAppointmentButtonClick()}>
      Schedule New Appointment </button>
  );
}

class AppointmentScheduler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patient: '',
      date: '',
      time: '',
      kind: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    const {patient, time, kind, date} = this.state;
    const classname = this.props.displayAppointmentScheduler ? 'displayed' : 'hidden';
    return(
      <div id='appointment-scheduler' className={classname}>
        <form onSubmit={() => this.props.handleNewAppointmentSubmission(event, patient, time, kind, date)}>
          <fieldset>
            <legend>New Appointment Information:</legend>
            Patient (first last):<br/>
            <input required type="text"
              name="patient"
              value={this.state.patient}
              onChange={(event)=> this.handleChange(event)} />
            <br/>
            Date:<br/>
            <input required type="date"
              name="date"
              value={this.state.date}
              onChange={(event)=> this.handleChange(event)} />
            <br/>
            Time:<br/>
            <input required type="time"
              name="time"
              value={this.state.time}
              onChange={(event)=> this.handleChange(event)} />
            <br/>
            <select required id='visit-type' name='kind' onChange={(event) => this.handleChange(event)}>
              <option value="">--choose visit type--</option>
              <option value="New Patient">New Patient</option>
              <option value="Follow-up">Follow-up</option>
            </select>
            <br/>
            <input
            id='submit-appointment-button'
            type="submit"
            value="Submit"
            />
          </fieldset>
        </form>
      </div>
    );
  }
}

export { MakeAppointmentButton, AppointmentScheduler };
