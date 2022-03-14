const mongoose = require("./connection");

const { Schema, model } = mongoose;

const postSchema = new Schema({
    title: String,
    img: String,
    entry: String,
})

const Post = model("Post", postSchema);

module.exports = Post;