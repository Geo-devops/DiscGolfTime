import axios from "axios";

export default {
    getPosts: async function(postData) {
        console.log('FROM FEED GETALLPOSTS', postData)
        const postDataString = JSON.stringify(postData);
        return axios.get(`/feed/getPosts/${postDataString}`);
    },
    newPost: function(postData) {
        console.log('POSTDATA: ', postData);
        return axios.post('/feed/newPost', postData)
    },
    addPost: function(postData) {
        console.log('POSTDATA: ', postData);
        return axios.post('/feed/addPost', postData)
    }
}