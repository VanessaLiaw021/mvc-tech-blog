//Import Comment Model
const { Post } = require("../models/Post");

//Create a list of sample post
const postData = [
    {
        post_title: "",
        post_text: "",
        user_id: 1
    }
];

//Insert users into the database
const seedPosts = Post.bulkCreate(postData);

//Export the seeded comments
module.exports = seedPosts;