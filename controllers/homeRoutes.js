//Import required packages and files 
const router = require("express").Router();
const { Post, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

//Function to serialize the data
const serialize = (data) => JSON.parse(JSON.stringify(data));

//GET method to display all posts
router.get("/", async (req, res) => {

    //Try to run the code inside
    try {

        //Get all posts to display on home page
        const displayAllPost = await Post.findAll({

            include: [{ model: User}]
        });

        //Serialize the data
        const posts = serialize(displayAllPost);

        //Render the home page
        res.render("homepage", { posts, loggedIn: req.session.loggedIn });

        //Catch error if any 
    }   catch (err) {

        //Display error if any 
        res.json(err);
    };
});

//Get the routes to sign in page
router.get("/signin", (req, res) => {

    //Check to see if the session if loggedIn
    if (req.session.loggedIn) res.redirect("/dashboard");

    //Render to signin page 
    res.render("signin");
});

//Get the routes to sign in page
router.get("/signup", (req, res) => {

    //Check to if the user signUp successfully, make it true
    if (req.session.loggedIn) res.redirect("/dashboard");

    //Render to signup page
    res.render("signup");
});

//GET Method to route to the single posts with comments and adding a comment
router.get("/posts/:id", async (req, res) => {
    
    //Get the id of that post and display it on another page
    const singlePost = await Post.findOne({ 

        where: { id: req.params.id },

        include: [{ model: User}, { model: Comment }]
    });

    //Serialize the data
    const post = serialize(singlePost);

    //Render to the singlepost 
    res.render("singlepost", { post, loggedIn: req.session.loggedIn });
});

//Export router
module.exports = router;