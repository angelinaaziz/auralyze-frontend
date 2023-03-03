const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let AnswerSchema = new Schema ({
  question: {
    type: String,
  required: true
  },
  
  answerURL:{
    type: String,
  required: true
  }

});

module.exports = Answer = mongoose.model("answers", AnswerSchema);
