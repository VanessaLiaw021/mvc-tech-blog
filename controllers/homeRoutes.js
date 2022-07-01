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
        res.render("homepage", { posts });

        //Catch error if any 
    }   catch (err) {

        //Display error if any 
        res.json(err);
    };
});

//Get the routes to sign in page
router.get("/signin", (req, res) => {
    res.render("signin");
});

//Get the routes to sign in page
router.get("/signup", (req, res) => {
    res.render("signup");
});

//GET Method to route to the single posts with comments and adding a comment
router.get("/posts/:id", async (req, res) => {
    
    const singlePost = await Post.findOne({ 

        where: { id: req.params.id },

        include: [{ model: User}, { model: Comment }]
    });

    const post = serialize(singlePost);

    res.render("singlepost", { post });
});

//Export router
module.exports = router;