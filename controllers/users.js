const express = require('express');
const User = require("../models/user");

// Create Router
const router = express.Router();

// Index
router.get('/', (req, res) => {
    Post.find({})
        .then((posts) => {
            res.render("posts/Index", { posts })
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})

module.exports = router;