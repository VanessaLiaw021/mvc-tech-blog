//Import Comment Model
const { Comment } = require("../models/Comment");

//Create a list of sample comment
const commentData = [
    {
        comment_text: "Nice blog",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "Great work, the blog is interesting",
        user_id: 2, 
        post_id: 2
    },
    {
        comment_text: "Nice work, now I know that MVC operation is about",
        user_id: 3, 
        post_id: 3
    },
    {
        comment_text: "Great reading",
        user_id: 4, 
        post_id: 4
    },
    {
        comment_text: "Awesome reading, understandable",
        user_id: 5, 
        post_id: 5
    },
    {
        comment_text: "Nice work, learn something new for once",
        user_id: 6, 
        post_id: 6
    },
    {
        comment_text: "Cool, nice work",
        user_id: 7, 
        post_id: 7
    },
    {
        comment_text: "Learning something new",
        user_id: 8, 
        post_id: 8
    }
];

//Insert users into the database
const seedComments = Comment.bulkCreate(commentData);

//Export the seeded comments
module.exports = seedComments;