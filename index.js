// index.js
const express = require('express');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3000;

// Use Morgan for logging
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Hello, Azure App Service!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
