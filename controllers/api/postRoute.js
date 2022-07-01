//Import required packages and files 
const router = require("express").Router();
const { Post } = require("../../models");

//GET method to get all posts
router.get("/", async (req, res) => {

    //Try to run the code inside
    // try {

    //     //Get all the post
    //     const allPost = await Post.findAll({

    //     });

    //     //Return data in a json file
    //     res.json(allPost);

    //     //Catch error if any
    // }   catch (err) {

    //     //Display error if any
    //     res.json(err);
    // }
});

//POST method to create a new post 
router.post("/", async (req, res) => {

    //Try to run the code inside
    try {

        //Create a new post 
        const createPost = await Post.create({
            post_title: req.body.post_title,
            post_text: req.body.post_text
        });

        //Return the data in a json file
        res.json(createPost);

        //Catch error if any
    }   catch (err) {

        //Display error if any
        res.json(err);
    }
});

//Export router
module.exports = router;