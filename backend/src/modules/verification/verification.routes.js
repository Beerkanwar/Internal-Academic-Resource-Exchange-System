const express = require('express');
const verificationController = require('./verification.controller');
const { authenticate, authorize } = require('../auth/auth.middleware');

const router = express.Router();

// Only admins OR teachers can verify depending on requirements. Choosing admin.
router.use(authenticate, authorize(['admin']));

router.get('/pending', verificationController.getPending);
router.post('/approve/:id', verificationController.approve);
router.post('/reject/:id', verificationController.reject);

module.exports = router;
