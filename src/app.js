const express = require('express');
const app = express();

const itemRoutes = require('./routes/itemRoutes');

app.use(express.json());

app.use('/items', itemRoutes);

app.get('/', (req, res) => {
  res.json({
    status: "success",
    message: "API aman bos"
  });
});

module.exports = app;