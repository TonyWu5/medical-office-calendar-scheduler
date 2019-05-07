DROP DATABASE IF EXISTS doctor_appointments;

CREATE DATABASE IF NOT EXISTS doctor_appointments;

USE doctor_appointments;

CREATE TABLE IF NOT EXISTS doctors (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  firstname VARCHAR(20) NOT NULL,
  lastname VARCHAR(20) NOT NULL,
  email VARCHAR(30) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS appointments(
  doctorID INT NOT NULL,
  patient VARCHAR(20) NOT NULL,
  time TIME NOT NULL,
  kind VARCHAR(20) NOT NULL,
  date DATE NOT NULL
);

ALTER TABLE appointments
  ADD FOREIGN KEY appointments(doctorID)
  REFERENCES doctors(id);
  