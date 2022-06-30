//Import User Model
const { User } = require("../models/User");

//Create a list of sample user
const userData = [
    {
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
        username: "aliceThompson",
        passowrd: "aliceThompson123"
    }
];

//Insert users into the database
const seedUsers = User.bulkCreate(userData);

//Export the seeded users
module.exports = seedUsers;