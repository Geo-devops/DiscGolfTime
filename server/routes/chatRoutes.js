const router = require('express').Router();
const chatController = require('../controllers/chatController');

router.post('/newOrOpenChat', chatController.newOrOpenChat)
router.post('/addMessage', chatController.addMessage)
router.get('/getMessages', chatController.getMessages)

module.exports = router;