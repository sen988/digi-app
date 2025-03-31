const DiaryEntry = require('../models/diaryEntry');

const createEntry = async (req, res) => {
    const { title, content} = req.body;
    const userId = req.user.id; // Ensure you're getting the user ID from the token
    console.log('User ID:', userId); // Debugging line
    const contentUrl = req.file ? `/uploads/${req.file.filename}` : null;
    try {
        const newEntry = await DiaryEntry.create({ title, content, contentUrl, userId });
        res.status(201).json({ message: 'Diary entry created', entry: newEntry });
    } catch (error) {
        res.status(500).json({ message: 'Error creating diary entry', error });
    }
};

module.exports = {
    createEntry,
  };