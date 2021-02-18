const router = require('express').Router();
const courseController = require('../controllers/courseController');

router.route('/courses/')
  .get(courseController.findAll)
  .post(courseController.create);

router
  .route('/courses/:id')
  .get(courseController.findById)


module.exports = router;
