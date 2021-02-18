const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatSchema = new Schema({
    user: { type: String, required: true },
    chatPartner: { type: String, required: true },
    chats: { type: Object }
})

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;