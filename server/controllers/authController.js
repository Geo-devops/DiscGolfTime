const db = require("../models");

// Defining methods for the userController
module.exports = {
  findAll: function(req, res) {
    console.log('=====All====')
    db.User.find(req.query)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err))
    // const id = req.body;
    // db.User.find(req.params.id)
    // .then(dbModel => res.json(dbModel))
    // .catch(err => res.status(422).json(err));
  },
  getUser: (req, res, next) => {
    console.log('=====getUser!======');
    if (req.user) {
      return res.json({ user: req.user });
    } else {
      return res.json({ user: null });
    }
  },
  findById: function(req, res) {
      console.log('====FINDBYID=====')
      console.log('req.params', req.params)
      db.User.findById(req.params.userId)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  register: (req, res) => {
    const { firstName, lastName, username, password } = req.body;
    // ADD VALIDATION
    db.User.findOne({ 'username': username }, (err, userMatch) => {
      if (userMatch) {
        return res.json({
          error: `Sorry, already a user with the username: ${username}`
        });
      }
      const newUser = new db.User({
        'firstName': firstName,
        'lastName': lastName,
        'username': username,
        'password': password
      });
      newUser.save((err, savedUser) => {
        if (err) return res.json(err);
        return res.json(savedUser);
      });
    });
    // db.User.create(req.body)
    // .then(dbUser => res.json(dbUser))
    // .catch(err => res.status(422).json(err))
  },
  logout: (req, res) => {
    if (req.user) {
      req.session.destroy();
      res.clearCookie('connect.sid'); // clean up!
      return res.json({ msg: 'logging you out' });
    } else {
      return res.json({ msg: 'no user to log out!' });
    }
  },
  auth: function(req, res, next) {
		console.log("=======req.body: ", req.body);
		console.log('=======authController.auth=========');
		next();
  },
  authenticate: (req, res) => {
		console.log('===POST to /login');
		const user = JSON.parse(JSON.stringify(req.user)); // hack
		const cleanUser = Object.assign({}, user);
		if (cleanUser) {
			console.log(`Deleting ${cleanUser.password}`);
			delete cleanUser.password;
		}
		res.json({ user: cleanUser });
	}
};
