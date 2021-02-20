require('dotenv').config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
const dbConnection = require('./config/connection');
const passport = require('./config/passport');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/', express.static(path.join(__dirname, '../client/build')));
app.use(cors());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

//Cors for login token
app.use('/login', (req, res) => {
  res.send({
    token: 'test123',
  });
});

// Passport
app.use(passport.initialize());
app.use(passport.session()); // will call the deserializeUser
app.use(
  session({
    secret: 'secretIDhere',
    store: new MongoStore({ mongooseConnection: dbConnection }),
    resave: false,
    saveUninitialized: false,
  })
);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/'));
});

// Add Auth and API routes
app.use('/auth', require('./routes/authRoutes'));
app.use('/api', require('./routes/apiRoutes'));
app.use('/chat', require('./routes/chatRoutes'));
app.use('/feed', require('./routes/feedRoutes'));

// If no routes are hit, send the React app
app.use(function (req, res) {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

// Error handler
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500);
});

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/discgolftime");

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
