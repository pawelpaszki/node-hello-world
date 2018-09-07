'use strict';

const express = require('express');

// Constants
const FH_PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.listen(FH_PORT, HOST);
console.log(`Running on http://${HOST}:${FH_PORT}`);
