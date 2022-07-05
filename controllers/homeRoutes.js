//Import required packages and files 
const router = require("express").Router();
const { Post, User, Comment } = require("../models");

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

//GET Method to route to the single posts with comments and adding a comment
router.get("/posts/:id", async (req, res) => {
    
    //Get the id of that post and display it on another page
    const singlePost = await Post.findOne({ 

        //Find the id when the specific post is clicked
        where: { id: req.params.id },

        //Attributes to include be used in Post
        attribute: ["id", "post_title", "post_text"],

        //Include the required model to display on the comment
        include: [
            { model: User, attributes: ["username"]}, 
            { 
                model: Comment,
                include: [{ model: User, attributes: ["username"]}] 
            }
        ]
    });

    //Serialize the data
    const post = serialize(singlePost);

    //Render to the singlepost 
    res.render("singlePost", { post, loggedIn: req.session.loggedIn });
});

//GET method to sign in to the page
router.get("/signIn", (req, res) => {

    //Check to see if the session if loggedIn
    if (req.session.loggedIn) res.redirect("/dashboard");

    //Render to signin page 
    res.render("signIn");
});

//GET methodto sign up 
router.get("/signUp", (req, res) => {

    //Check to if the user signUp successfully, make it true
    if (req.session.loggedIn) res.redirect("/dashboard");

    //Render to signup page
    res.render("signUp");
});

//Export router
module.exports = router;