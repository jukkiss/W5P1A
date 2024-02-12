// Import necessary modules
const express = require('express');
const { getPhonebooks, addPhonebook, deletePhonebook, getPhonebook, patchPhonebook } = require('../controllers/phonebookController');

// Create a new router instance
const router = express.Router();

// Define routes
router.get('/phonebooks', getPhonebooks); // Route for fetching all phonebooks
router.post('/phonebooks', addPhonebook); // Route for adding a new phonebook
router.delete('/phonebooks/:id', deletePhonebook); // Route for deleting a phonebook
router.get('/phonebooks/:id', getPhonebook); // Route for fetching a specific phonebook by ID
router.patch('/phonebooks/:id', patchPhonebook); // Route for updating a specific phonebook by ID

// Export the router
module.exports = router;
