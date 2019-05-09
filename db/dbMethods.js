const db = require('./index.js');

/**
 * I recommend that you change your parameter that you're passing in to as a single object. 
 * That way it's much easier to manage the data and reduce the possibility of missing 
 * parameters. And then do something like this.
 * const addDoctor = ({firstName, lastName, email}) => { ... }
 */
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

/**
 * Rather than just a throw an error I would recommend you also pass back the error 
 * into the return that way it'll be easier to generate specific error messages. 
 */
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
  getAppointmentsList 
};
