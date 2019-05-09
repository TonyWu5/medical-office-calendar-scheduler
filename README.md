This is a calendar app for doctor offices. <br/>
The app submits a request to retrieve a list of doctors, and upon selection, submits another request to retrieve and displays an individual doctor's calendars for the date. <br/>
The app also allows pre-existing appointments to be deleted and new appointments to be added. <br/>

## Instructions
1. Run MySQL schema file 'db/schema.sql' <br/>
2. Seed database by running 'node db/dbSeeding.js' <br/>
3. Build app using webpack by running 'npm run build' <br/>
4. Serve app using express by running 'npm start' <br/>

The app is to be served through localhost:3000<br/>

TODO: <br/>
1. Add pop up messages to warn user of scheduling conflict.
2. Prevent appointment submission until all fields are filled.
3. Prevent appointments from being created within 20-30min of pre-existing appointments.
4. Prevent appointments from being created for past-dates.
