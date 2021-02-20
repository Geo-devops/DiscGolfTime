const router = require('express').Router();
const feedController = require('../controllers/feedController');

// router.get('/getPostId/:postId', feedController.findById)
router.get('/getPosts/:courseName', feedController.getPosts)
router.post('/newPost', feedController.newPost)
router.post('/addPost/', feedController.addPost)

module.exports = router;
