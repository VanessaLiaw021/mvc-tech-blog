//Import Comment Model
const { Post } = require("../models");

//Create a list of sample post
const postData = [
    {
        post_title: "Model-View-Controller",
        post_text: "MVC or Model-View-Controller is a software design pattern used to implement user interfaces, data, and controlling logic. It emphasizes a separation between the software's business logic and display",
        user_id: 1
    },
    {
        post_title: "Authentication vs. Authorization",
        post_text: "There is a difference between authentication and authorization. Authentication means confirming your own identify, whereas authorization means being allowed access to the system",
        user_id: 2
    },
    {
        post_title: "Object-Relational-Mapping",
        post_text: "ORM or Object-Relational-Mapping is a design pattern for converting that data stored within a relational database into an object that can be used within an object-oriented program",
        user_id: 3
    },
    {
        post_title: "Node.js vs Express.js",
        post_text: "The difference between understanding Node.js and Express.js is Node.js help manage servers and routes. As for Express.js, provide broad features for building web and mobile application",
        user_id: 4
    },
    {
        post_title: "Understanding Async and Await keyword in JS",
        post_text: "Async makes a function return a Promise and Await makes a function wait for a Promise",
        user_id: 5
    },
    {
        post_title: "A way to work with relational database, Sequelize",
        post_text: "Sequelize is an open source Node.js module that enable JS developers to work with relational databases",
        user_id: 6
    },
    {
        post_title: "Create-Read-Update-Delete",
        post_text: "CRUD is a way of how people to interact with the web application. Creating a account, Reading the stuff posted, Update a password, Delete a account. CRUD operation are how user interact with the applictation or software",
        user_id: 7
    },
    {
        post_title: "Understanding SEO is important in web developer world",
        post_text: "Search Engine Optimization or SEO is a process of improving the quality and quantity of website traffic to a website or web page from search engines",
        user_id: 8
    }
];

//Insert users into the database
const seedPosts = () => Post.bulkCreate(postData);

//Export the seeded comments
module.exports = seedPosts;