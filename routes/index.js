const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.brandyRoute);
routes.get('/allan', lesson1Controller.allanRoute);
routes.get('/jeff', lesson1Controller.jeffRoute);

module.exports = routes;