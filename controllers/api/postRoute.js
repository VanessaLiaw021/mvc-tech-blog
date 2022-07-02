//Import required packages and files 
const router = require("express").Router();
const { Post, User, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

//GET method to get all posts
router.get("/", async (req, res) => {

    //Try to run the code inside
    try {

        //Get all the post
        const allPost = await Post.findAll({

            //Get the attributes from the post table 
            attributes: ["id", "post_text", "post_title"],  

            //Order the post from most recent

            //Include the User and Comment model when getting all the post
            include: [
                { 
                    //User model and attributes to include
                    model: User,
                    attributes: ["username"]
                }, 
                { 
                    //Comment model to include the user model, and attributes to include
                    model: Comment,
                    attributes: ["id", "comment_text", "post_id", "user_id"],
                    include: [{ model: User, attributes: ["username"]}] 
                }
            ]
        });

        //Return data in a json file
        res.json(allPost);

        //Catch error if any
    }   catch (err) {

        //Display error if any
        res.json(err);
    };
});

//GET method to get a single post
router.get("/:id", async (req, res) => {

    //Try to run the code inside
    try {

        //Get all the post
        const allPost = await Post.findByPk(req.params.id, {

            //Attributes to include from the post table
            //attributes: ["id", "post_text", "post_title"],  
            
            //Order the post from most recent

            //Include the User and Comment model when getting all the post
            include: [
                { 
                    //User model and attributes to include
                    model: User,
                    attributes: ["username"]
                }, 
                { 
                    //Comment model to include the user model, and attributes to include
                    model: Comment,
                    include: [{ model: User, attributes: ["username"]}] 
                }
            ]
        });

        //Return data in a json file
        res.json(allPost);

        //Catch error if any
    }   catch (err) {

        //Display error if any
        res.json(err);
    };
});

//POST method to create a new post 
router.post("/", withAuth, async (req, res) => {

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
    };
});

//PUT method to update the post
router.put("/:id", withAuth, async (req, res) => {

    //Try to run the code inside
    try {

        //Update the post 
        const updatePost = await Post.update({

            //Look for the id that corresponds to the post and update it
            where: { id: req.params.id }
        });

        //Return the data in a json file 
        res.json(updatePost);

        //Catch error if any
    }   catch (err) {

        //Display error if any
        res.json(err);
    };
});

//DELETE method to delete a post
router.delete("/:id", withAuth, async (req, res) => {

    //Try to run the code inside 
    try {

        //Delete a post 
        const deletePost = await Post.destroy({

            //Look for the id that corresponds to the post and delete it
            where: [{ id: req.params.id }]
        });

        //Return the data in a json file
        res.json(deletePost);

        //Catch erro if any
    }   catch (err) {
        
        //Display error if any
        res.json(err);
    };
});

//Export router
module.exports = router;