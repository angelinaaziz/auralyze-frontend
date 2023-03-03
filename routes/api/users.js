const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
// Load User model
const User = require("../../models/users");
const Answer = require("../../models/answers")
const sendEmail = require("../../config/sendEmail")

// Builds a new user-- if they meet all the requirements
router.post("/register", (req, res) => {
  console.log('register api reached')
  console.log('here is the req body')
  console.log(req.body)

    // Looking up a user by the email used to register
    User.findOne({ email: req.body.email }).then(user => {
      // Returning an error if a user is found
      if (user) {
        console.log('user email taken')
        return res.status(400).json({ emailTaken: true });
      }
      // Otherwise creating a new user
      else {
        const newUser = new User({
          email: req.body.email,
          password: req.body.password,
          type:req.body.type
      });
      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save()
            .then(user => {// Create JWT Payload
            const payload = {
              id: user.id,
              name: user.name
            };
      // Sign token
      jwt.sign(payload, keys.secretOrKey,
        {
          expiresIn: 31556926 // 1 year in seconds
        },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        )}).catch(err => console.log(err));
        });
      });
    }
  })

});
router.post("/login", (req, res) => {
  console.log('login api reached')
  console.log('here is the request body')
  console.log(req.body)

  const email = req.body.email;
  const password = req.body.password;
  // Find user by email
  User.findOne({ email }).then(user => {
    console.log('user found...')
    console.log(user)
    // Check if user exists
    if (!user) {
      console.log('no user found')
      return res.status(400).json({ emailnotfound: true });
    }
    // Check if account is active
    if (!user.isActive) {
      console.log('user is set not active')
      return res.status(400).json({ userInactive: true });
    }
    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name
        };
        // Sign token
        jwt.sign(payload, keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: true });
      }
    });
  });
});
router.post("/save-answer",(req,res)=>{
  console.log('save answer api reached')
  console.log('here is the request body')

  console.log(req.body)
  console.log(req.files)
  User.findById(req.body.userID).then(user => {
    console.log('saving answer forthis user')
    console.log(user)
    const newAnswer = new Answer({question: req.body.question,
                                  answerURL:req.body.video});
    user.answers.push(newAnswer);
    user.save();
    let newMessage="Here is the question: "+req.body.question+ "? And here is the new video"+" "+ req.body.video
    // sendEmail(user.email, "New Answer Video", newMessage); uncomment to send email to user as well
    sendEmail("angelinaaziz1@gmail.com", "New Answer Video", newMessage)
  })
  return res.json({videoAdded:true})
})
module.exports = router;