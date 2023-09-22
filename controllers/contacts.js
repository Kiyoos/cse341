const ObjectId = require('mongodb').ObjectId;
const mongodb = require ('../db/connect');

// Get all Contacts in Contacts List
const getAllContacts = async (req, res, next) => {
    const result = await mongodb.getDb().db().collection('contacts').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    });
};

// Get a Single Contact depending on the ID
const getSingleContact = async (req, res, next) => {
    // req.params.id will grab the requested id for the json file
    const userId = new ObjectId(req.params.id);
    // .find({_id: userId}) finds the user id that was entered above
    const result = await mongodb.getDb().db().collection('contacts').find({_id: userId});
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
    });
};


module.exports = {getSingleContact, getAllContacts};