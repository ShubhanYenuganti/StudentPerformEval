const express = require('express');
const router = express.Router();
const multer = require('multer');
const Class = require('../models/Class');

// Set up file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});
const upload = multer({ storage });

// POST /api/classes/create
router.post('/create', async (req, res) => {
  const { title, description } = req.body;
  try {
    const newClass = new Class({ title, description });
    await newClass.save();
    res.json(newClass);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create class' });
  }
});

// POST /api/classes/upload
router.post('/upload', upload.single('file'), async (req, res) => {
  const { classId, category } = req.body;

  try {
    const existingClass = await Class.findById(classId);
    if (!existingClass) {
      return res.status(404).json({ error: 'Class not found' });
    }

    const newFile = {
      filename: req.file.filename,
      category,
      path: req.file.path
    };

    existingClass.files.push(newFile);
    await existingClass.save();

    res.json({ message: 'File uploaded successfully' });

  } catch (error) {
    res.status(500).json({ error: 'Failed to upload file' });
  }
});

// GET /api/classes/insights/:classId
router.get('/insights/:classId', async (req, res) => {
  const { classId } = req.params;

  try {
    const existingClass = await Class.findById(classId);
    if (!existingClass) {
      return res.status(404).json({ error: 'Class not found' });
    }

    res.json({ insights: existingClass.insights });

  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch insights' });
  }
});

module.exports = router;
