//Import required packages and files 
const router = require("express").Router();

//Get the routes to homepage
router.get("/", (req, res) => {
    res.render("homepage");
})

//Export router
module.exports = router;