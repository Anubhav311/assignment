const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const routes = require('./routes/route.js');

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3003;
const DB_URL = process.env.DB_URL;

app.use(bodyParser.json());
app.use(routes)

// is live
app.get('/', (req, res) => {
  res.send('Order Service is live')
})

// connect swith db

app.listen(PORT, () => {
  console.log(`Order service is running on port ${PORT}`)
})