const express = require('express');
const bodyParser = require('body-parser');
const { getDoctorsList, getAppointmentsList, cancelAppointment } = require('../db/dbMethods');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));

app.get('/doctors', (req, res) => {
  getDoctorsList( (err, result) => {
    if (err) { throw err}
    res.send(result);
  });
});

app.get('/appointments/:doctorID', (req, res) => {
  const id = req.params.doctorID;
  getAppointmentsList(id, (err, result) => {
    if (err) { throw err}
    res.send(result);
  });
});

app.delete('/appointments', (req, res)=> {
  const { appointmentID } = req.body;
  cancelAppointment(appointmentID, (err, result) => {
    if (err) res.send(err);
    res.send(result);
  })
});

app.post('/appointments', (req, res) => {
  
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`))
