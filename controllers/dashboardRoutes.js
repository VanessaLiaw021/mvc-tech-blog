//Import required packages and files 
const router = require("express").Router();

//Get the routes to homepage
router.get("/", (req, res) => {
    res.render("dashboard");
})

//Export router
module.exports = router;