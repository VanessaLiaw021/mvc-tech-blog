//Import required packages 
const express = require("express");
const exphbs = require("express-handlebars");
const session = require("express-session");
const path = require("path");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const routes = require("./controllers");
const sequelize = require("./config/connection");
const helpers = require("./utils/helpers");

//Start the express server
const app = express();
const PORT = process.env.PORT || 3001;

//Set up session with cookies 
const sess = {
  secret: 'Super secret secret',

  //Set the time to expire at 10 minutes
  cookie: { maxAge: 10 * 60 * 1000 },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({ db: sequelize }),
};

//Use express session for the session handling
app.use(session(sess));

//Initialize handlebars for the html templates
const hbs = exphbs.create({ helpers });

//Set handlebars as the template engine for the express server
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

//Express server to read form public directory
app.use(express.static(path.join(__dirname, "public")));

//Parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Express server to read from routes directory
app.use(routes);

//Sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => app.listen(PORT, () => console.log(`Now listening`)));