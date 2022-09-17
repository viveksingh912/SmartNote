const express = require("express");
const User = require("../modules/User");
const fetchuser=require("../middleware/fetchuser");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const JWT_SECRET = "Thisismeoryou";
// ROUTE -1: to create user 
router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter  a valid email").isEmail(),
    body("password", "Enter a valid password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    success=false;
    // if error occurs ,then return the error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success, errors: errors.array() });
    }
    try {
      //check if user with the same email already exists in database

      let user = await User.findOne({ email: req.body.email });
      // converting plain password into encrypted password using bcrypt js
      let salt = await bcrypt.genSalt(10);
      let pswd = await bcrypt.hash(req.body.password, salt);
      if (user) {
        return res
          .status(400)
          .json({success, error: "sorry a user with this email arleady exists" });
      }
      // if everything is fine then add the user to database || fine means like email id is unique;
      else {
        user = await User.create({
          name: req.body.name,
          password: pswd,
          email: req.body.email,
        });
        const data = {
          user: {
            id: user.id,
          },
        };
        var token = jwt.sign(data, JWT_SECRET);
        success=true;
        res.json({success, token: token });
      }
    } catch (error) {
      // If something goes wrong then throw error
      console.error(error.message);
      res.status(500).send("some error occured");
    }
  }
);
// ROUTE-2  to provide login to user
router.post(
  "/login",
  [
    body("email", "Enter  a valid email").isEmail(),
    body("password", "Enter a valid password").exists(),
  ],
  async (req, res) => {
    //checking if email and password are  entered or not
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try{
    const { email, password } = req.body;
    // checking if the entered email exists in our database
    let user = await User.findOne({ email });
    // If email doesn't exists  then returning the error
    success=false;
    if (!user) {
      return res
        .status(400)
        .json({success, error: "plese login with the correct credentials" });
    }
    // comparing the entered password with the database password
    let match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res
        .status(400)
        .json({success, error: "plese login with the correct credentials" });
    }
    // if password matches then returning the user in the form of json web token;
    const data = {
      user: {
        id: user.id,
      },
    };
    success=true;
    var token = jwt.sign(data, JWT_SECRET);
    res.json({success, token: token,name:user.name });
  }catch (error) {
    // If something goes wrong then throw error
    console.error(error.message);
    res.status(500).send("some error occured");
  }
  }
);
// Route-3 ,, getting loggedin user detail;
router.post('/getuser',fetchuser, async (req,res)=>{
  success=false;
try {
  userId=req.user.id;
  const user= await User.findById(userId).select('-password');
  success=true;
  res.send(success,user);
} catch (error) {
  res.status(500).send(error);
}
})

module.exports = router;
