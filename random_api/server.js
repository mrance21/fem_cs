const express = require('express');
const dotenv = require('dotenv');

//route files
const bootcamps = require('./routes/bootcamps');

// load env var
dotenv.config({ path: './config/config.env' });

const app = express();

//mounte router
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(`server is running in ${process.env.NODE_ENV} on port ${PORT}`);
});
