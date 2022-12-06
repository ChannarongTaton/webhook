const express = require('express');
const bodyParser = require('body-parser');
const lineRoute = require('./router/routeLine');
const cron = require('./router/cron')
const cors = require('cors')
require('dotenv').config()

const app = express();

app.use(bodyParser.json());
app.use(cors())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.end()
})
app.get('/tam', (req, res) => {
    res.json(        {
        "username": "Tam",
        "password": `12345`,
    })
})
app.use('/webhookHome', lineRoute)
app.get('/cron', cron)
const port = 3030;

app.listen(port,() => {
    console.log(`Server http://localhost:${port}`)
});