const express = require('express');
const adminController = require('./admin.controller');
const { authenticate, authorize } = require('../auth/auth.middleware');

const router = express.Router();

// Only admins can manage users
router.use(authenticate, authorize(['admin']));

router.get('/users', adminController.listUsers);
router.delete('/users/:id', adminController.removeUser);

module.exports = router;
