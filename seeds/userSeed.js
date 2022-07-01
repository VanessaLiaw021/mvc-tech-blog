//Import User Model
const { User } = require("../models");

//Create a list of sample user
const userData = [
    {
        id: 1,
        username: "mattSawyer",
        password: "mattSawyer123"
    },
    {
        username: "susanLee",
        password: "susanLess123"
    },
    {
        username: "leeSung",
        password: "leeSung123"
    },
    {
        username: "maryTate",
        password: "maryTate123"
    },
    {
        username: "timSims",
        password: "timSims123"
    },
    {
        username: "lucasToms",
        password: "lucasToms123"
    },
    {
        username: "markAndrew",
        password: "markAndrew123"
    },
    {
        username: "alisonTate",
        password: "alisonTate123"
    }
];

//Insert users into the database
const seedUsers = () => User.bulkCreate(userData);

//Export the seeded users
module.exports = seedUsers;