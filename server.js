const express = require('express');
const bodyParser = require('body-parser');
const lineRoute = require('./router/routeLine');

require('dotenv').config()

const app = express();

app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.end()
})
app.use('/webhookHome', lineRoute)
const port = 3030;

app.listen(port,() => {
    console.log(`Server http://localhost:${port}`)
});