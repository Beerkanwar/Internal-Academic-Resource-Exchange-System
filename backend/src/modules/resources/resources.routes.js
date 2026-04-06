const express = require('express');
const multer = require('multer');
const resourcesController = require('./resources.controller');
const { authenticate } = require('../auth/auth.middleware');

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});
const upload = multer({ storage });

router.post('/', authenticate, upload.single('file'), resourcesController.upload);
router.get('/', resourcesController.list);
router.get('/:id', resourcesController.getOne);
router.delete('/:id', authenticate, resourcesController.remove);

module.exports = router;
