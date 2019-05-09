## Introduction
This is a calendar/appointment-scheduling app for doctor offices.
this app is built using React.js, Express.js and MySQL.
Current Features:
* retrieves & renders list of doctors
* retrieves & renders individual doctor's list of appointments
* cancel appointment & update list
* add appointment & update list

TODO: <br/>
1. Add pop up messages to warn user of scheduling conflict.
2. Prevent appointment submission until all fields are filled.
3. Prevent appointments from being created within 20-30min of pre-existing appointments.
4. Prevent appointments from being created for past-dates.
5. Enable addition of new doctors into database.
6. Default display of same-day appointments only (if time allows)
7. Enable display of appointments from specified-date (if time allows))

## Instructions
1. Run MySQL schema file 'db/schema.sql' <br/>
2. Seed database by running 'node db/dbSeeding.js' <br/>
3. Build app using webpack by running 'npm run build' <br/>
4. Serve app using express by running 'npm start' <br/>
The app is served through localhost:3000<br/>
