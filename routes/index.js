const express = require('express');
const router = express.Router();
const swagger = require('./swagger');
const contacts = require('./contacts');
// const lesson1Controller = require('../controllers/lesson1');

router.use('/', swagger);
router.use('/contacts', contacts);

// Lesson 1 simple contacts
// router.get('/', lesson1Controller.brandyRoute);
// router.get('/jeff', lesson1Controller.jeffRoute);
// router.get('/allan', lesson1Controller.allanRoute);

module.exports = router;
