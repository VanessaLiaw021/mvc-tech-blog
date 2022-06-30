//Import required packages and files 
const router = require("express").Router();

//Get the routes to homepage
router.get("/", (req, res) => {
    res.render("homepage");
});

//Get the routes to sign in page
router.get("/signin", (req, res) => {
    res.render("signin");
});

//Get the routes to sign in page
router.get("/signup", (req, res) => {
    res.render("signup");
});

//Export router
module.exports = router;