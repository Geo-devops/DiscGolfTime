/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
    signUpUser: function(newUser) {
        console.log('USERDATA!!!!!: ', newUser);
        return axios.post("/auth/signup", newUser);
    },
    loginUser: function(user) {
        console.log('USERRR !!!!: ', user);
        return axios.post("/auth/login", user);
    },
    getUser: function() {
        return axios.get("/auth/user");
    }
};