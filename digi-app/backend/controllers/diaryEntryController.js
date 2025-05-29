const DiaryEntry = require('../models/diaryEntry');

const createEntry = async (req, res) => {
    const { title, content} = req.body;
    const userId = req.user.id; 
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;
    try {
        const newEntry = await DiaryEntry.create({ title, content, imageUrl, userId });
        res.status(201).json({ message: 'Diary entry created', entry: newEntry });
    } catch (error) {
        res.status(500).json({ message: 'Error creating diary entry', error });
    }
};

const getUserEntries = async (req, res) => {
    const userId = req.user.id;
    try {
        const entries = await DiaryEntry.findAll({ where: { userId } });
        res.status(200).json(entries);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving diary entries', error });
    }
};

const retrieveEntry = async (req, res) => {
    const { id } = req.params;
    const userId = req.user.id;

    try {
        const entry = await DiaryEntry.findOne({where: { id, userId }});
        if (!entry) {
            return res.status(404).json({ message: 'Diary entry not found' });
        }
        res.status(200).json(entry);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving diary entry', error });
    }
};

module.exports = {
    createEntry,
    getUserEntries,
    retrieveEntry,
  };