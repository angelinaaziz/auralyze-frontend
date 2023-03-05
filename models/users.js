const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var Answer = require("./answers");

let UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: false
  },
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  token: {
    type: String
  },
  isActive: {
    type: Boolean,
    required: true,
    default: true
  },
  date: {
    type: Date,
    default: Date.now
  },

  answers: [Answer.schema],
});

module.exports = User = mongoose.model("users", UserSchema);
