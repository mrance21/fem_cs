const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

//import routes
const bootcamps = require('./routes/bootcamps');

//load config
dotenv.config({ path: './config/config.env' });

const app = express();

//logger
app.use(morgan('dev'));

//mount router
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT;
app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} on port ${PORT}`)
);
