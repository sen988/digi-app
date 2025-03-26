const express = require('express');
const multer = require('multer');
const router = express.Router();
const { createEntry } = require('../controllers/diaryEntryController.js');

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

router.post('/create-entry', upload.single('image'), createEntry);

module.exports = router;