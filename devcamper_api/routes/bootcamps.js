const express = require('express');
const {
  getBootcamp,
  getBootcamps,
  createBootcamp,
  updatetBootcamp,
  deleteBootcamp,
} = require('../controllers/bootcamps');

const router = express.Router();
// prettier-ignore
router
  .route('/')
  .get(getBootcamps)
  .post(createBootcamp);

router
  .route('/:id')
  .get(getBootcamp)
  .put(updatetBootcamp)
  .delete(deleteBootcamp);

module.exports = router;

//router takes request and decides which controller will handle it, controller accepts/handles request
