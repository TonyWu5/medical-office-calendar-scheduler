const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname + '/../client/dist'))
app.get('/', (req, res) => res.send('hello, get request received!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))