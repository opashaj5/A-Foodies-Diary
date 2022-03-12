const mongoose = require("./connection");

const { Schema, model } = mongoose;

const userSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  });

const User = model("user", userSchema);

module.exports = User;