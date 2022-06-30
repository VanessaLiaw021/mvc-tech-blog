//Import required packages and files 
const router = require("express").Router();

//Get the routes to homepage
router.get("/", (req, res) => {
    res.render("homepage");
});

//Get the routes to sign in
router.get("/signin", (req, res) => {
    res.render("signIn");
});

//Get the routes to sign in
router.get("/signup", (req, res) => {
    res.render("signUp");
});

//Export router
module.exports = router;