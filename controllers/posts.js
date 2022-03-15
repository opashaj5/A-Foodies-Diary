const express = require('express');
const Post = require("../models/post");

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

// New
router.get('/new', (req, res) => {
    res.render('posts/New')
})

// Delete
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    Post.findByIdAndDelete(id)
        .then(() => {
            res.redirect('/users/home');
        })
        .catch((error) => {
            res.status(400).json({ error });
        })
})

// Update
router.put('/:id', (req, res) => {
    const { id } = req.params;

    Post.findByIdAndUpdate(id, req.body)
        .then(() => {
            res.redirect(`/${id}`)
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})

// Create
router.post('/', (req, res) => {
    Post.create(req.body)
        .then((createdPost) => {
            res.redirect(`/${createdPost._id}`)
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})

// Edit
router.get('/:id/edit', (req, res) => {
    const { id } = req.params
    Post.findById(id)
        .then((post) => {
            res.render('posts/Edit', { post })
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})

// Show
router.get('/:id', (req, res) => {
    const { id } = req.params;

    Post.findById(id)
        .then((post) => {
            res.render('posts/Show', { post })
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})

module.exports = router;