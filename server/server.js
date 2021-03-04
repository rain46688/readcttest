const express = require('express');
const app = express();
const api = require('./routes/index');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', api);

const port = process.env.PORT || 7777;

app.listen(port,()=>console.log(`Listening on port ${port}`));