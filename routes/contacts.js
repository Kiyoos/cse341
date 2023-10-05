const express = require('express');

const contactsController = require('../controllers/contacts');

const router = express.Router();

router.use('/',
  (docData = (req, res) => {
    let docData = {
      documentationURL: 'https://https://cse341-afb3.onrender.com/contacts/api-docs',
    };
    res.send(docData);
  })
);

// get all contacts from db
router.get('/', contactsController.getAllContacts);

// get single contact from db
router.get('/:id', contactsController.getSingleContact);

// create new contact
router.post('/', contactsController.createContact);

// update new contact
router.put('/:id', contactsController.updateContact);

// delete new contact
router.delete('/:id', contactsController.deleteContact);

// exports
module.exports = router;
