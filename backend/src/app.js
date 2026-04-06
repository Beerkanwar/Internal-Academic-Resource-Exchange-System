const express = require('express');
const cors = require('express');
const authRoutes = require('./modules/auth/auth.routes');
const resourcesRoutes = require('./modules/resources/resources.routes');
const verificationRoutes = require('./modules/verification/verification.routes');

const app = express();

app.use(require('cors')());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/resources', resourcesRoutes);
app.use('/api/verification', verificationRoutes);
// Static route to serve uploaded files
app.use('/uploads', express.static('uploads'));

app.get('/', (req, res) => {
  res.send('NITJ Resource Exchange API is running...');
});

module.exports = app;
