/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
    signUpUser: function(newUser) {
        console.log('USERDATA for signup: ', newUser);
        return axios.post("/auth/signup", newUser);
    },
    loginUser: async function(user) {
        console.log('data for login: ', user);
        return axios.post("/auth/login", user);
    },
    findAllUsers: async function() {
        console.log('findall');
        return axios.get("/auth/users/");
    }
};