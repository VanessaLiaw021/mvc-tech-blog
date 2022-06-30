//Import required packages
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

//Initialize User model (table) by extending off Sequelize's Model Class
class User extends Model {

    //Check the password with the hashed password 
    checkPassword(signInPassword) {
        return bcrypt.compareSync(signInPassword, this.password);
    };
};

//Set up fields and rules for User model 
User.init (
    {
        //Create a id field for user
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },

        //Create a username field for user
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        //Create a password field for user
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4]
            }
        }
    },
    {
        //Add a hook to hash the password before creating a new user
        hooks: {
            beforeCreate: async (newUserData) => {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            }
        },

        //Create rules for User Model
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "user"
    }
);

//Export User Model
module.exports = User;