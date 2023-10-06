const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

// Get all Contacts in Contacts List
const getAllContacts = async (req, res) => {
  const result = await mongodb.getDb().db().collection('contacts').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

// Get a Single Contact depending on the ID
const getSingleContact = async (req, res) => {
  // req.params.id will grab the requested id for the json file
  const userId = new ObjectId(req.params.id);
  // .find({_id: userId}) finds the user id that was entered above
  const result = await mongodb.getDb().db().collection('contacts').find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

// Post/Create a new Contact
const createContact = async (req, res) => {
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    birthday: req.body.birthday,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor
  };
  const result = await mongodb.getDb().db().collection('contacts').insertOne(contact);
  if (result.acknowledged) {
    res.status(201).json(result);
  } else {
    res.status(500).json(result.error || 'Some error occurred while creating the contact.');
  }
};

// Put/Update a Contact NOT FINISHED!!!
const updateContact = async (req, res) => {
  // req.params.id will grab the requested id for the json file
  const userId = new ObjectId(req.params.id);
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    birthday: req.body.birthday,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor
  };
  // .updateOne({_id: userId}) deletes the user id that was entered above
  const result = await mongodb
    .getDb()
    .db()
    .collection('contacts')
    .replaceOne({ _id: userId }, contact);
  console.log(result);
  if (result.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(result.error || 'Some error occurred while updating the contact.');
  }
};

// Delete a Contact
const deleteContact = async (req, res) => {
  // req.params.id will grab the requested id for the json file
  const userId = new ObjectId(req.params.id);
  // .deleteOne({_id: userId}) deletes the user id that was entered above
  const result = await mongodb.getDb().db().collection('contacts').deleteOne({ _id: userId });
  if (result.acknowledged) {
    res.status(200).json(result);
  } else {
    res.status(500).json(result.error || 'Some error occurred while deleting the contact.');
  }
};

module.exports = {
  getSingleContact,
  getAllContacts,
  createContact,
  updateContact,
  deleteContact
};
