const db = require("../models");

module.exports = {
    newOrOpenChat: function(req, res) {
        console.log('========NEWCHAT======')
        const { user, chatPartner } = req.body;
        db.Chat.findOne({ 'user': user, 'chatPartner': chatPartner }, (err, chatMatch) => {
            if(chatMatch) {
                console.log('THIS CHAT ALREADY EXISTS, KEEP ADDING TO IT')
                // ADD CODE TO KEEP ADDING TO THIS
                return;
            }
            const newChat = new db.Chat({
                'user': user,
                'chatPartner': chatPartner
            });
            newChat.save((err, savedChat) => {
                if (err) return res.json(err);
                return res.json(savedChat);
            })
        });
    },
    addMessage: function(req, res) {
        console.log("=======ADDMESSAGE=====")
        const { user, chatPartner, thisChat } = req.body;
        db.Chat.findOneAndUpdate({ 'user': user, 'chatPartner': chatPartner }, {$push: {chats: thisChat}})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    getMessages: function(req, res) {
        console.log("=====GETMESSAGES====")
        const usableData = req.params.userchatPartner
        const actuallyusableData = JSON.parse(usableData)
        // console.log('actuallyuabledata.user: ', actuallyusableData.user)
        
        db.Chat.findOne({ user: actuallyusableData.user, chatPartner: actuallyusableData.chatPartner }, function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
    }
}