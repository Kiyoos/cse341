const express = require('express');

const contactsController = require('../controllers/contacts');

const router = express.Router();

// get all contacts from db
router.get('/', contactsController.getAllContacts);

// get single contact from db
router.get('/:id', contactsController.getSingleContact);
//console.log('Get Single contact ' + contactsController.getSingleContact);


// exports
module.exports = router;