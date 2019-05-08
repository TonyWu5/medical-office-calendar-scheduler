const db = require('./index.js');

const addDoctor = (firstname, lastname, email) => {
  query = `INSERT INTO doctors (firstname, lastname, email) VALUES ('${firstname}', '${lastname}', '${email}')`;
  db.query(query, (err, result) => {
    if (err) throw err;
    console.log('doctor added');
  });
}

const getDoctorsList = (callback) => {
  query = 'SELECT * FROM doctors';
  db.query(query, (err, result) => {
    if (err) callback(err);
    callback(null, result);
  });
}

const makeAppointment = (doctorID, patientName, time, kind, date) => {
  query = `INSERT INTO appointments (doctorID, patient, time, kind, date) VALUES ('${doctorID}', '${patientName}', '${time}', '${kind}', '${date}')`;
  db.query(query, (err, result) => {
    if (err) throw err;
    console.log('appointment made');
  });
}

const cancelAppointment = (appointmentID, callback) => {
  query = `DELETE FROM appointments WHERE id=${appointmentID}`;
  db.query(query, (err, result) => {
    if (err) throw err;
    callback(null, result);
  });
}


const getAppointmentsList = (doctorID, callback) => {
  query = `SELECT id, patient, TIME_FORMAT(time, '%h:%i%p'), kind FROM appointments where doctorId=${doctorID}`;
  db.query(query, (err, result) => {
    if (err) callback(err);
    callback(null, result);
  });
}

module.exports = {
  addDoctor,
  getDoctorsList,
  makeAppointment,
  cancelAppointment,
  getAppointmentsList };
