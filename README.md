This is a calendar app for doctor offices. <br/>
The app submits a request to retrieve a list of doctors, and upon selection, submits another request to retrieve and displays an individual doctor's calendars for the date. <br/>

## Instructions
1. Run MySQL schema file 'db/schema.sql' <br/>
2. Seed database by running 'node db/dbSeeding.js' <br/>
3. Build app using webpack by running 'npm run build' <br/>
4. Serve app using express by running 'npm start' <br/>

The app is to be served through localhost:3000
<br/>
TODO: <br/>
1. implement add doctor, create appointment and delete appointment features. <br/>
2. add constraint to database to prevent schedule/time conflict for individual doctors. <br/>
