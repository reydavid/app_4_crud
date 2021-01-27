const express = require('express')

const ContactCtrl = require('../constrollers/contact-ctrl')

const router = express.Router()

router.post('/create-contact', ContactCtrl.createContact)
router.put('/update-contact/:id', ContactCtrl.updateContact)
router.delete('/contact/:id', ContactCtrl.deleteContact)
router.get('/contact/:id', ContactCtrl.getContactById)
router.get('/contacts', ContactCtrl.getContacts)

module.exports = router