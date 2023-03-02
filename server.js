const cors = require('cors');
const express = require("express");
const mongoose = require("mongoose");
const path = require('path')
const passport = require("passport");
const bodyParser = require("body-parser");

// User routes
const users = require("./routes/api/users");
const app = express();

app.use(cors());
app.use(express.json());

app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));

// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);


// Printing a message if running on a dev server.
if (typeof process.env === 'undefined') {
    console.log('running on a dev server')
  }
  //  serve up static file if in production
  else {
    if (process.env.NODE_ENV ==='production') {
      app.use(express.static('client/build'));
      app.get('*', (req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
      })
    }
  }
  
  const port = process.env.PORT || 8081; // process.env.port is Heroku's port if you choose to deploy the app there
  
  app.listen(port, () => console.log(`Server up and running on port ${port} !`));
  