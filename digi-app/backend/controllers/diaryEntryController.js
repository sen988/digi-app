const Diary = require('../models/diaryEntry');

const createEntry = async (req, res) => {
    const { title, content, userId } = req.body;
    const contentUrl = req.file ? `/uploads/${req.file.filename}` : null;
    try {
        const newEntry = await Diary.create({ title, content, contentUrl, userId });
        res.status(201).json({ message: 'Diary entry created', entry: newEntry });
    } catch (error) {
        res.status(500).json({ message: 'Error creating diary entry', error });
    }
};

module.exports = {
    createEntry,
  };