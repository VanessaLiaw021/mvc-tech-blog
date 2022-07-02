//Import required packages and files 
const router = require("express").Router();
const {User, Post, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

//GET method to get all comments
router.get("/", async (req, res) => {
    
    //Try to run the code inside 
    try {

        //Get all comments
        const displayAllComments = await Comment.findAll({
            include: [{model: User}, {model: Post }]
        });

        //Return data in a json file
        res.json(displayAllComments);

        //Catch error if any
    }   catch (err) {

        //Display error if any
        res.json(err);
    }
});

//POST method to create a comment 
router.post("/", withAuth, async (req, res) => {

    //Try to run the code inside
    try {

        //Create the post 
        const createComment = await Comment.create({
            comment_text: req.body.comment_text,
            post_id: req.body.post_id,
            user_id: req.session.user_id
        });

        //Return the data in a json file 
        res.json(createComment);

        //Catch error if any
    }   catch (err) {

        //Display error if any
        res.json(err);
    };
});

//Export router
module.exports = router;