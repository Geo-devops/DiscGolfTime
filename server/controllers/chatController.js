const db = require("../models");

module.exports = {
    newOrOpenChat: function(req, res) {
        console.log('========NEWCHAT======')
        const { user, chatPartner } = req.body;
        db.Chat.findOne({ 'user': user, 'chatPartner': chatPartner }, (err, chatMatch) => {
            if(chatMatch) {
                // console.log('THIS CHAT ALREADY EXISTS, KEEP ADDING TO IT')
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
        })
    },
    newOrOpenChatInvert: function(req, res) {
        console.log("===NEWCHATINVERT===")
        const { user, chatPartner } = req.body;
        db.Chat.findOne({ 'user': chatPartner, 'chatPartner': user }, (err, chatMatch) => {
            if(chatMatch) {
                // console.log('THIS CHAT ALREADY EXISTS, KEEP ADDING')
                return;
            }
            const newChat1 = new db.Chat({
                'user': chatPartner,
                'chatPartner': user
            });
            newChat1.save((err, savedChat) => {
                if (err) return res.json(err);
                return res.json(savedChat);
            })
        })
    },
    addMessage: function(req, res) {
        console.log("=======ADDMESSAGE=====")
        const { user, chatPartner, thisChat } = req.body;
        db.Chat.findOneAndUpdate({ 'user': user, 'chatPartner': chatPartner }, {$push: {chats: thisChat}})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    addMessageInvert: function(req, res) {
        console.log("====ADDMESSAGEINVERT===")
        const { user, chatPartner, thisChat } = req.body;
        db.Chat.findOneAndUpdate({ 'user': user, 'chatPartner': chatPartner }, {$push: {chats: thisChat}})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    getMessages: function(req, res) {
        console.log("=====GETMESSAGES====")
        const usableData = req.params.user
        console.log('USABLE DATA:', usableData);
        const actuallyusableData = JSON.parse(usableData)
        console.log('actuallyusabledata: ', actuallyusableData)
        
        // db.Chat.findOne({ user: actuallyusableData.user, chatPartner: actuallyusableData.chatPartner }, function (err, result) {
        //     if (err) {
        //         res.send(err);
        //     } else {
        //         res.send(result);
        //     }
        // });

        db.Chat.find({ user: actuallyusableData.user}, function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
    }
}