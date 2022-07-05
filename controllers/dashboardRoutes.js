//Import required packages and files 
const router = require("express").Router();
const { User, Post, Comment } = require("../models");
const withAuth = require("../utils/auth");

//Function to serialize the data
const serialize = (data) => JSON.parse(JSON.stringify(data));

//GET method to get all post by the user that is login
router.get("/", withAuth, async (req, res) => {

    //Try to run the code inside 
    try {

      //Find all the post the user post and display them
      const postData = await Post.findAll({

        //Find the user post based on the user login id 
        where: { user_id: req.session.user_id },

        //Attributes to include in the edit post data
        atttributes: ["id", "post_title", "post_text", "created_at"],

        //Include the model that need to be on the post
        include: [
          { 
            model: Comment,
            attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
            include: [{ model: User, attributes: ["username"]}]
          }, 
          { model: User, attributes: ["username"] }
        ]
      });

      //Serialize the data
      const posts = serialize(postData);

      //Render the dashboard if user is logged and display the dashboard item
      res.render("dashboard", { posts, loggedIn: req.session.loggedIn });

      //Catch any error if any 
    } catch (err) {

      //Display error if exist
      res.json(err);
    };
});

//GET method to edit a post
router.get("/edit/:id", withAuth, async (req, res) => {

    //Get the id of the post, and when click, it will let user edit post 
    const editPost = await Post.findOne({

        //Find the id with the correspond that is clicked
        where: { id: req.params.id },

        //Attributes to include in the edit post data
        atttributes: ["id", "post_title", "post_text", "created_at"],

        //Include the model to edit
        include: [
          { 
            model: Comment,
            attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
            include: [{ model: User, attributes: ["username"]}]
          }, 
          { model: User, attributes: ["username"]}
        ]
    });

    //Serialize the data
    const post = serialize(editPost);

    //Render the editpost, if user is logged it will display the dashboard
    res.render("update-post", { post, loggedIn: req.session.loggedIn });
});

//GET method to add a post
router.get("/add-post", withAuth, (req, res) => {

  //Render the add post when user sign in to dashboard
  res.render("add-post", { loggedIn: req.session.loggedIn});
})

//Export router
module.exports = router;