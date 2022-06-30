//Import required packages and files 
const router = require("express").Router();
const apiRoutes = require("./api");

//Express server to read from api directory
router.use("api", apiRoutes);

//Export router
module.exports = router;