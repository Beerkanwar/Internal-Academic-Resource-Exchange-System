const express = require('express');
const searchController = require('./search.controller');

const router = express.Router();

// Allow public or authenticated search? Prompt implies general usage.
router.get('/', searchController.search);

module.exports = router;
