const router = require('express').Router();
const chatController = require('../controllers/chatController');

router.post('/newOrOpenChat', chatController.newOrOpenChat)
router.post('/newOrOpenChatInvert', chatController.newOrOpenChatInvert)
router.post('/addMessage', chatController.addMessage)
router.post('/addMessageInvert', chatController.addMessageInvert)
// router.get('/getMessages/:userchatPartner', chatController.getMessages)

router.get('/getMessages/:user', chatController.getMessages)

module.exports = router;