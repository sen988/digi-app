const express = require('express');
const multer = require('multer');

const { DiaryEntry } = require('../models/index.js');
const { authenticateToken } = require('../middleware/authMiddleware.js');
const { createEntry } = require('../controllers/diaryEntryController.js');

const router = express.Router();

if (!DiaryEntry) {
  console.error('DiaryEntry model is not defined or imported correctly.');
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname);
    }
  });
  
  const upload = multer({ storage: storage }

);

router.post('/create-entry', authenticateToken, upload.single('image'), createEntry);

module.exports = router;