const express = require('express');
const User = require("../models/user");

// Create Router
const router = express.Router();

// Home
router.get('/', (req, res) => {
    Post.find({})
        .then((posts) => {
            res.render("posts/Index", { posts })
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})

// About
router.get('/about', (req, res) => {
    Post.find({})
        .then((posts) => {
            res.render("posts/Index", { posts })
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})

// Contact
router.get('/about', (req, res) => {
    Post.find({})
        .then((posts) => {
            res.render("posts/Index", { posts })
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})

module.exports = router;