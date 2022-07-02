//Import required packages and files 
const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Post, Comment } = require("../models");
const withAuth = require("../utils/auth");

//Function to serialize the data
const serialize = (data) => JSON.parse(JSON.stringify(data));

//GET method to get all post by the user that is login
router.get("/", withAuth, async (req, res) => {

    //Try to run the code inside 
    try {

      //Find all the post the user post and display them
      const postData = await Post.findAll( {

        //Find the user post based on the user login id 
        where: { user_id: req.params.user_id },

        //Attributes to include in the edit post data
        atttributes: ["id", "post_title", "post_text", "createdAt"],

        //Include the model that need to be on the post
        include: [{model: Comment}, {model: User}]

      });

      //Serialize the data
      const post = serialize(postData);

      res.render("dashboard", { post, loggedIn: req.session.loggedIn });

      //Catch any error if any 
    } catch (err) {

      //Display error if exist
      res.json(err);
    };
});

//GET method to edit a post
router.get("/edit", withAuth, (req, res) => {

   res.render("editpost");
});

//GET method to add a post
router.get("/addpost", withAuth, (req, res) => {

    res.render("addpost");
})

//Export router
module.exports = router;