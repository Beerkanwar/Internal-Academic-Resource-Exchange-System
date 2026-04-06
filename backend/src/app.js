const express = require('express');
const cors = require('express');
const authRoutes = require('./modules/auth/auth.routes');
const resourcesRoutes = require('./modules/resources/resources.routes');
const verificationRoutes = require('./modules/verification/verification.routes');
const searchRoutes = require('./modules/search/search.routes');
const adminRoutes = require('./modules/admin/admin.routes');

const app = express();

app.use(require('cors')());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/resources', resourcesRoutes);
app.use('/api/verification', verificationRoutes);
app.use('/api/search', searchRoutes);
app.use('/api/admin', adminRoutes);
// Static route to serve uploaded files
app.use('/uploads', express.static('uploads'));

app.get('/', (req, res) => {
  res.send('NITJ Resource Exchange API is running...');
});

module.exports = app;
