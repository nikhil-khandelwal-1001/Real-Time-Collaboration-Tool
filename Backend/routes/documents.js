const express = require('express');
const Document = require('../models/Document');
const { verifyToken } = require('../middleware/auth');
const router = express.Router();


const { createDoc } = require('../controller/createDoc.controller');
const { deleteDoc } = require('../controller/deleteDoc.controller');
const { updateDoc } = require('../controller/updateDoc.controller');
const { documentById } = require('../controller/documentById.controller');


// Get all documents for the logged-in user
router.get('/', verifyToken, async (req, res) => {
    try {
        //const documents = await Document.find({ owner: req.user.id });
        const documents = await Document.find({});
        res.json(documents);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Get a single document by ID
router.get('/:id', verifyToken,documentById);

// Create a new document
router.post('/', verifyToken,createDoc );

// Update a document
router.put('/:id', verifyToken, updateDoc);
// Delete a document
router.delete('/:id', verifyToken, deleteDoc );

module.exports = router;
