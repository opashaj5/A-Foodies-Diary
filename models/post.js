const mongoose = require("./connection");

const { Schema, model } = mongoose;

const postSchema = new Schema({
    name: String,
    color: String,
})

const Post = model("Post", postSchema);

module.exports = Post;