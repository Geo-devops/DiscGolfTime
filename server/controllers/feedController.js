const db = require("../models");

module.exports = {
    getPosts: function(req, res) {
        console.log('===GETPOSTS===')
        const usableData = req.params.courseName
        const actuallyusableData = JSON.parse(usableData)
        db.Feed.find({ courseName: actuallyusableData.courseName}, function (err, result) {
            if(err) {
                res.send(err);
            } else {
                res.send(result);
            }
        })
    },
    newPost: function(req, res) {
        console.log('=====NEWPOST=====')
        const { courseName } = req.body;
        db.Feed.findOne( { 'courseName': courseName }, (err, courseMatch) => {
            if(courseMatch) {
                return;
            }
            const newCoursePost = new db.Feed({
                'courseName': courseName
            });
            newCoursePost.save((err, savedPost) => {
                if(err) return res.json(err);
                return res.json(savedPost);
            })
        })
    },
    addPost: function(req, res) {
        console.log("=======ADDPOST=====")
        const { courseName, thisPost } = req.body;
        console.log('COURSENAME: ', courseName);
        console.log('THIS POST: ', thisPost)
        db.Feed.findOneAndUpdate({ 'courseName': courseName }, {$push: {posts: thisPost}})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
}