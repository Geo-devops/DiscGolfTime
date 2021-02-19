/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {

    getAllCourses: async function() {
        return axios.get("/api/courses/");
    }
};