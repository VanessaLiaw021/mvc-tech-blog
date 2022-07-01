//Import required packages and files 
const router = require("express").Router();
const {User, Post, Comment } = require("../../models");

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

//GET method to get all comments
router.get("/:id", async (req, res) => {
     
    //Try to run the code inside
    try {

        //Get all the post
        const specificComment = await Comment.findByPk(req.params.id, {
            
            include: [{ model: User}, { model: Post }]
        });

        //Return data in a json file
        res.json(specificComment);

        //Catch error if any
    }   catch (err) {

        //Display error if any
        res.json(err);
    };
});

//Export router
module.exports = router;