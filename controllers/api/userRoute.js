//Import required packages and files 
const router = require("express").Router();
const User = require("../../models/User");
const withAuth = require("../../utils/auth");

//POST method to create a new user 
router.post("/", withAuth, async (req, res) => {

   //Try to run the code inside
   try {

      //Create a new user
      const createUser = await User.create({

         username: req.body.username,
         password: req.body.password
      });

      //Save the session the user created 
      req.session.save(() => {
         req.session.user_id = req.body.id;
         req.session.username = req.body.username;
         req.session.loggedIn = true;
      });

      //Return the data of the new user 
      res.json(createUser);

      //Catch any error if any 
   }  catch (err) {

      //Display error if any
      res.json(err);
   };
});

//POST method to login the user into the applicatin
router.post("/signin", async (req, res) => {

   //Try to run the code inside
   try {

      //Find the user in the database that matches the one the user inputted in the field
      const findUserData = await User.findOne({ where: { username: req.body.username }});

      //If the username don't match display the error message
      if (!findUserData) res.json({ message: "Incorrect username or password" });

      //Verify the password 
      const validatePassword = await findUserData.checkPassword(req.body.password);

      //Validate the password 
      if (!validatePassword) res.json({ message: "Incorrect username or password" });

      //If the checkPassword is true, the user is now logged in 
      res.json({ user: findUserData, message: "You are logged in!" });

      //Catch any error if any
   }  catch (err) {

      //Display error if any
      res.json(err);
   }
});

//Export router
module.exports = router;