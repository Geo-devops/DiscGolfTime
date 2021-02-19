const db = require("../models");

// Defining methods for the courseController
module.exports = {
  findAll: function(req, res) {
    console.log('FINDALLCOURSES===')
    db.Course
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Course
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Course
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Course
    .findById({_id: req.params.id})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  }
};