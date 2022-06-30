//Import required packages
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

//Initialize User model (table) by extending off Sequelize's Model Class
class Post extends Model {};

//Set up fields and rules for post Model
Post.init (
    {
        //Create id field for post
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },

        //Create a title field for post
        post_title: {
            type: DataTypes.STRING,
            allowNull: false, 
            validate: {
                len: [2]
            }
        },

        //Create a text field for post
        post_text: {
            type: DataTypes.STRING,
            allowNull: false, 
            validate: {
                len: [2]
            }
        },

        //Create a user id for post
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false, 
            references: {
                model: "user",
                key: "id"
            }
        }
    },
    {
        //Create rules for Comment Model
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: "post"
    }
);

//Export Post Model
module.exports = Post;