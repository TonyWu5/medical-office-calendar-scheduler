const {addDoctor, makeAppointment} = require('./dbMethods');

const seedDoctors = (doctorInfo) => {
  addDoctor(doctorInfo[0], doctorInfo[1], doctorInfo[2]);
}

const seedAppointments = (doctorID, appointmentInfo) => {
  makeAppointment(doctorID,
    appointmentInfo[0],
    appointmentInfo[1],
    appointmentInfo[2],
    appointmentInfo[3]);
}

const doctor1 = ['Julius', 'Hibbert', 'hibbert@notablehealth.com'];
const doctor2 = ['Algernop', 'Krieger', 'krieger@notablehealth.com'];
const doctor3 = ['Nick', 'Riviera', 'riviera@notablehealth.com'];

const appointment1 = ['Sterling Archer', '8:00:00', 'New Patient', '2019-12-12'];
const appointment2 = ['Cyril Figis', '8:30:00', 'Follow-up', '2019-12-12'];
const appointment3 = ['Lana Kane', '9:00:00', 'Follow-up', '2019-12-12'];
const appointment4 = ['Pam Poovey', '10:00:00', 'New Patient', '2019-12-12'];

const appointment5 = ['John Smith', '13:00:00', 'New Patient', '2019-12-12'];
const appointment6 = ['Jane Doe', '15:00:00', 'Follow-up', '2019-12-12'];

const appointment7 = ['Tony Wu', '10:00:00', 'New Patient', '2019-12-12'];

seedDoctors(doctor1);
seedDoctors(doctor2);
seedDoctors(doctor3);

seedAppointments(2, appointment1);
seedAppointments(2, appointment2);
seedAppointments(2, appointment3);
seedAppointments(2, appointment4);
seedAppointments(1, appointment5);
seedAppointments(1, appointment6);
seedAppointments(3, appointment7);