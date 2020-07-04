const express = require('express');
require('./database');

const port = process.env.PORT || 8000;

const app = express();

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}.`);
});