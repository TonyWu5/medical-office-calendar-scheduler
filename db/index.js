const mysql = require('mysql');

const dbConfig = {
  host: 'localhost',
  user: 'root',
  database: 'doctor_appointments'
};

const connection = mysql.createConnection(dbConfig);

connection.connect( (err) => {
  if (err) throw err;
  console.log(`Connected to MySQL database: ${dbConfig.database}!`)
});

module.exports = connection;
