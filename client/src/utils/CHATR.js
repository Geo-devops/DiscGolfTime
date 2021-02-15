import axios from "axios";

export default {
    newOrOpenChat: function(chatData) {
        console.log('from CHATR: neworopenchat, CHATDATA: ', chatData);
        return axios.post("/chat/newOrOpenChat", chatData);
    },
    addMessage: function(chatData) {
        console.log('FROM CHATR: CHATDATA: ', chatData);
        return axios.post("/chat/addMessage", chatData)
    },
    getMessages: async function(chatData) {
        console.log('FROM CHATR, GETMSGS, CHATDATA: ', chatData);
        return axios.get('/chat/getMessages', chatData);
    }
}