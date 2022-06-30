//Import required packages and files 
const router = require("express").Router();
const userRoutes = require("./userRoute");
const postRoutes = require("./postRoute");
const commentRoutes = require("./commentRoute");

//Express server to read from inside the api directory
router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/comments", commentRoutes);

//Export router
module.exports = router;