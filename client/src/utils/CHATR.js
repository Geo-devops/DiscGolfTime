import axios from "axios";

export default {
    newOrOpenChat: function(chatData) {
        // console.log('from CHATR: neworopenchat, CHATDATA: ', chatData);
        return axios.post("/chat/newOrOpenChat", chatData);
    },
    newOrOpenChatInvert: function(chatData) {
        return axios.post("/chat/newOrOpenChatInvert", chatData);
    },
    addMessage: function(chatData) {
        // console.log('FROM CHATR: CHATDATA: ', chatData);
        return axios.post("/chat/addMessage", chatData)
    },
    addMessageInvert: function(chatData) {
        return axios.post("/chat/addMessageInvert", chatData)
    },
    getMessages: async function(chatData) {
        // console.log('FROM CHATR, GETMSGS, CHATDATA: ', chatData);
        const chatDataString = JSON.stringify(chatData)
        // console.log('CHATDATASTRING: ', chatDataString)
        return axios.get(`/chat/getMessages/${chatDataString}`);
    }
}