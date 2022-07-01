//Import required packages and files 
const router = require("express").Router();
const { Post, User, Comment } = require("../models");

//Function to serialize the data
const serialize = (data) => JSON.parse(JSON.stringify(data));

//GET method to display all posts
router.get("/", async (req, res) => {

   //Render the home page
   res.render("homepage");
});

//Get the routes to sign in page
router.get("/signin", (req, res) => {
    res.render("signin");
});

//Get the routes to sign in page
router.get("/signup", (req, res) => {
    res.render("signup");
});

//Export router
module.exports = router;