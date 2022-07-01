//Import required packages and files 
const router = require("express").Router();
const { Post, User, Comment } = require("../models");

//GET method to display all posts
router.get("/", async (req, res) => {

    //Find all post
    const findPostData = await Post.findAll({

        include: [
            {
                model: User, 
                attributes: ["username"]
            },
            {
                model: Comment,
                attributes: ["id", "post_title", "post_text", "user_id"],
                include: {
                    model: "User",
                    attributes: ["username"]
                }
            }
        ]
    });

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