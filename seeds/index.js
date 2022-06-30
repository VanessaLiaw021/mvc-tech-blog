//Import required seed model and packages
const seedUsers = require("./userSeed");
const seedPosts = require("./postSeed");
const seedComments = require("./commentSeed");
const sequelize = require("../config/connection");

//Seed all the model to the database
const seedAll = async () => {

    //Create the table, dropping it first if it already existed
    await sequelize.sync({ force: true });

    //Seed the User model
    await seedUsers();
    console.log("\n---------- Users Seeded ----------\n");

    //Seed the Post model 
    await seedPosts();
    console.log("\n---------- Posts Seeded ----------\n");

    //Seed the Comment model 
    await seedComments();
    console.log("\n---------- Comments Seeded ----------\n");

    //End process when all model is seeded 
    process.exit();
};

//Call the function
seedAll();