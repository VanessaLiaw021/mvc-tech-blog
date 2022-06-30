//Import required packages and files 
const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Post, Comment } = require("../models");

//GET method to get all post by the user that is login
router.get("/", (req, res) => {

    //Try to run the code inside 
   //  try {

   //    //Find all the post the user post and display them
   //    const postData = await Post.findAll( {

   //       //Find the user post based on the user login id 
   //       where: { user_id: req.params.user_id },

   //       //Attributes to include in the edit post data
   //       atttributes: ["id", "post_title", "post_text"],

   //       //Include the model that need to be on the post

   //    });

   //    //Catch any error if any 
   //  } catch (err) {

   //    //Display error if exist
   //    res.json(err);
   //  }

    res.render("dashboard");
});

//GET method to edit a post
router.get("/edit", (req, res) => {

   res.render("editpost");
});

//GET method to add a post
router.get("/addpost", (req, res) => {

    res.render("addpost");
})

//Export router
module.exports = router;