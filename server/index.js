const express = require('express');
const bodyParser = require('body-parser');
const { getDoctorsList, getAppointmentsList } = require('../db/dbMethods');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
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

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
