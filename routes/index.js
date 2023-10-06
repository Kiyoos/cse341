const express = require('express');
const router = express.Router();
const swagger = require('./swagger');
const contacts = require('./contacts');

router.use('/', swagger);
router.use('/contacts', contacts);

module.exports = router;
