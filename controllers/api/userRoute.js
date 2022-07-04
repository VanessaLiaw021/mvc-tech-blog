//Import required packages and files
const router = require("express").Router();
const User = require("../../models/User");

//GET method to find all user 
router.get("/", async (req, res) => {

  //Try to run the code inside 
  try {

    //Find all the user 
    const findUser = await User.findAll({

      //Attribute to user
      attributes: ["username"]
    });

    //Return the result in json file
    res.json(findUser);

    //Catch error if any
  } catch (err) {

    //Display error if any 
    res.json(err);
  };
});

//POST method to create a new user
router.post("/", async (req, res) => {

  //Try to run the code inside
  try {

    //Create a new user
    const createUser = await User.create({
      username: req.body.username,
      password: req.body.password,
    });

    //Save the session the user created
    req.session.save(() => {

      //Create a user id for new user
      req.session.user_id = createUser.id;

      //Set loggedIn status as true
      req.session.loggedIn = true;

      //Return the data of the new user
      res.json(createUser);
    });

      //Catch any error if any
   }  catch (err) {
    
    //Display error if any
    res.json(err);
  }
});

//POST method to login the user into the applicatin
router.post("/signin", async (req, res) => {

  //Try to run the code inside
  try {

    //Find the user in the database that matches the one the user inputted in the field
    const findUser = await User.findOne({ where: { username: req.body.username }});

    //If the username don't match display the error message
    if (!findUser) res.status(400).json({ message: "Incorrect username or password. "});
   
    //Verify the password
    const validatePassword = await findUser.checkPassword(req.body.password);

    //Validate the password
    if (!validatePassword) res.status(400).json({ message: "Incorrect username or password. Please try again!"});

    //Save the session the user created
    req.session.save(() => {

      //Login the user with the id
      req.session.user_id = findUser.id,

      //Set loggedIn status as true
      req.session.loggedIn = true;

      //If the checkPassword is true, the user is now logged in
      res.json({ user: findUser, message: "You are logged in!" });
    });

    //Catch any error if any
   } catch (err) {

    //Display error if any
    res.status(400).json(err);
  };
});

//POST method to logout user
router.post("/signout", async (req, res) => {

  //Try to run the code iniside
  try {

    //If the session is logged in, destroy the sesssion and logout
    if (req.session.loggedIn) req.session.destroy(() => res.end());

    //Catch any error if any
  } catch (err) {

    //Display error if any
    res.json(err);
  };
});

//Export router
module.exports = router;
