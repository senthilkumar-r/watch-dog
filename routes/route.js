const express = require('express');
const router = express.Router();
const Contact = require('../models/contacts');

//get all contacts
router.get('/contacts', (req, res, next) => {
    Contact.find((err, contacts) => {
        res.json(contacts);
    });
});

//add contact
router.post('/contact', (req, res, next) => {
    let newContact = new Contact({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone_number: req.body.phone_number
    });
    newContact.save((err, contact) => {
        if (err) {
            res.json({ msg: 'Failed to add contact' + err });
        } else {
            res.json({ msg: 'Contact added successfully' });
        }
    });
});

//delete contact
router.delete('/contact/:id', (req, res, next) => {
    Contact.remove({ _id: req.params.id }, (err, result) => {
        if (err) {
            res.json({ msg: 'Failed to delete contact' + err });
        } else {
            res.json({ msg: 'Contact deleted successfully' });
        }
    });
});

module.exports = router;