const express = require('express');
const router = express.Router();
const lesson1Controller = require('../controllers/lesson1');

router.use('/contacts', require('./contacts'));

router.get('/', lesson1Controller.brandyRoute);
router.get('/jeff', lesson1Controller.jeffRoute);
router.get('/allan', lesson1Controller.allanRoute);

module.exports = router;
