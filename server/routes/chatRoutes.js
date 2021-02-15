const router = require('express').Router();
const chatController = require('../controllers/chatController');

router.post('/newOrOpenChat', chatController.newOrOpenChat)
router.post('/addMessage', chatController.addMessage)

module.exports = router;