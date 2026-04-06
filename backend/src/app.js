const express = require('express');
const cors = require('express');
const authRoutes = require('./modules/auth/auth.routes');

const app = express();

app.use(require('cors')());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('NITJ Resource Exchange API is running...');
});

module.exports = app;
