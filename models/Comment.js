//Import required packages
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

//Initialize User model (table) by extending off Sequelize's Model Class
class Comment extends Model {};

//Set up fields and rules for Comment Model
Comment.init (
    {
        //Create a id field for comment
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },

        //Create a text field for comment
        text_comment: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },

        //Create a user id for comment 
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false, 
            references: {
                model: "user",
                key: "id"
            }
        },

        //Create a post id for comment
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "post",
                key: "id"
            }
        }
    },
    {
        //Create rules for Comment Model
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "comment"
    }
);

//Export Comment Model 
module.exports = Comment;