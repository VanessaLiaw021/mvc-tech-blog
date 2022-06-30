//Import models
const User = require("./User");
const Comment = require("./Comment");
const Post = require("./Post");

//User hasMany Post
User.hasMany(Post, {
    foreignKey: "user_id"
});

//User hasMany Comment
User.hasMany(Comment, {
    foreignKey: "user_id"
});

//Post belongsTo User
Post.belongsTo(User, {
    foreignKey: "user_id"
});

//Post hasMany Comment
Post.hasMany(Comment, {
    foreignKey: "post_id"
});

//Comment belongsTo User
Comment.belongsTo(User, {
    foreignKey: "user_id"
});

//Comment belongsTo Post
Comment.belongsTo(Post, {
    foreignKey: "post_id"
});

//Export the models
module.exports = { User, Comment, Post };