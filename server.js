//Import required packages 
const express = require("express");
const exphbs = require('express-handlebars');
const routes = require("./controllers");
const sequelize = require("./config/connection");
const path = require("path");
const helpers = require("./utils/helpers");
const hbs = exphbs.create({ helpers });

//Start the express server
const app = express();
const PORT = process.env.PORT || 3001;

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

//Parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Exporess server to read form public directory
app.use(express.static(path.join(__dirname, "public")));

//Express server to read from routes directory
app.use(routes);

//Sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening http://localhost:${PORT}`));
});