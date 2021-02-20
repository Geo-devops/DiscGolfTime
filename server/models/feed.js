const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedSchema = new Schema({
    courseName: {type: String, required: true},
    posts: { type: Object }
})

const Feed = mongoose.model('Feed', feedSchema);

module.exports = Feed;