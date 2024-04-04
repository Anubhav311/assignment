const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const routes = require('./routes/routes.js');
const { default: mongoose } = require('mongoose');

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3001;
const MONGO_URL = process.env.MONGO_URL;

app.use(bodyParser.json());
app.use(routes)

// is live
app.get('/', (req, res) => {
  res.send('Customer Service is live')
})

// mongoose.connect(MONGO_URL)
//   .then(() => {
//     console.log("Database is connected successfully");
    app.listen(PORT, () => {
      console.log(`Customer service is running on port ${PORT}`)
    })
  // })
  // .catch((error) => console.log(error))
