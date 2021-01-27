const Contact = require('../models/index')

createContact = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a contact',
        })
    }

    const contact = new Contact(body)

    if (!contact) {
        return res.status(400).json({ success: false, error: err })
    }

    contact
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: contact._id,
                message: 'Contact created!',
                who: contact.who, 
                what: contact.what, 
                where: contact.where, 
                when: contact.when
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Contact not created!',
            })
        })
}

updateContact = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Contact.findOne({ _id: req.params.id }, (err, contact) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Contact not found!',
            })
        }
        contact.who = body.who
        contact.what = body.what
        contact.where = body.where
        contact.when = body.when
        contact
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: contact._id,
                    message: 'Contact updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Contact not updated!',
                })
            })
    })
}

deleteContact = async (req, res) => {
    await Contact.findOneAndDelete({ _id: req.params.id }, (err, contact) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!contact) {
            return res
                .status(404)
                .json({ success: false, error: `Contact not found` })
        }

        return res.status(200).json({ success: true, data: contact })
    }).catch(err => console.log(err))
}

getContactById = async (req, res) => {
    await Contact.findOne({ _id: req.params.id }, (err, contact) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!contact) {
            return res
                .status(404)
                .json({ success: false, error: `Contact not found` })
        }
        return res.status(200).json({ success: true, data: contact })
    }).catch(err => console.log(err))
}

getContacts = async (req, res) => {
    await Contact.find({}, (err, contacts) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!contacts.length) {
            return res
                .status(404)
                .json({ success: false, error: `Contact not found` })
        }
        return res.status(200).json({ success: true, data: contacts })
    }).catch(err => console.log(err))
}

module.exports = {
    createContact,
    updateContact,
    deleteContact,
    getContacts,
    getContactById,
}