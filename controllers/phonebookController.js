const Phonebook = require('../models/Phonebook');
const mongoose = require('mongoose');

// Function to get all phonebooks
const getPhonebooks = async (req, res) => {
  try {
    const phonebooks = await Phonebook.find({}).sort({ createdAt: -1 });
    res.status(200).json(phonebooks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Function to add a new phonebook
const addPhonebook = async (req, res) => {
  const { name, phoneNumber, email, address } = req.body;
  try {
    const newPhonebook = new Phonebook({ name, phoneNumber, email, address });
    await newPhonebook.save();
    res.status(201).json(newPhonebook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Function to delete a phonebook
const deletePhonebook = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedPhonebook = await Phonebook.findByIdAndDelete(id);
    if (!deletedPhonebook) {
      return res.status(404).json({ error: 'Phonebook not found' });
    }
    res.status(200).json({ message: 'Phonebook deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Function to get a specific phonebook by ID
const getPhonebook = async (req, res) => {
  const { id } = req.params;
  try {
    const phonebook = await Phonebook.findById(id);
    if (!phonebook) {
      return res.status(404).json({ error: 'Phonebook not found' });
    }
    res.status(200).json(phonebook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Function to update a specific phonebook by ID
const patchPhonebook = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedPhonebook = await Phonebook.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedPhonebook) {
      return res.status(404).json({ error: 'Phonebook not found' });
    }
    res.status(200).json(updatedPhonebook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getPhonebooks,
  addPhonebook,
  deletePhonebook,
  getPhonebook,
  patchPhonebook
};
