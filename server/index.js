const express = require('express');
const bodyParser = require('body-parser');
const { getDoctorsList, getAppointmentsList, cancelAppointment, makeAppointment } = require('../db/dbMethods');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));

app.get('/doctors', (req, res) => {
  getDoctorsList((err, result) => {
    if (err) {
      res.status(400).send(err.code);
    } else {
      res.status(200).send(result);
    };
  });
});

app.get('/appointments/:doctorID', (req, res) => {
  const id = req.params.doctorID;
  getAppointmentsList(id, (err, result) => {
    if (err) {
      res.status(400).send(err.code);
    } else {
      res.status(200).send(result);
    };
  });
});

app.delete('/appointments', (req, res)=> {
  const { appointmentID } = req.body;
  cancelAppointment(appointmentID, (err, result) => {
    if (err) {
      res.status(400).send(err.code);
    } else {
      res.status(200).send(result);
    };
  })
});

app.post('/appointments', (req, res) => {
  const {doctorID, patient, time, kind, date} = req.body;
  makeAppointment(doctorID, patient, time, kind, date, (err, result) => {
    if (err) {
      res.status(400).send(err.code);
    } else {
      res.status(200).send(result);
    };
  })
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
