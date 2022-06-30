//Import required packages and files 
const router = require("express").Router();

router.get("/", (req, res) => {
    res.render("addpost");
});

//Export router
module.exports = router;