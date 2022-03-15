const express = require('express');
const Post = require('../models/post');
const User = require("../models/user");

// Create Router
const router = express.Router();

// Index
router.get('/home', (req, res) => {
    Post.find({})
        .then((posts) => {
            res.render("posts/Index", { posts })
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})

// New
router.get('/about', (req, res) => {
    res.render('users/About')
})

module.exports = router;