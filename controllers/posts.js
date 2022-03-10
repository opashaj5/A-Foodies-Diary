const express = require('express');
const Post = require("../models/post");

// Create Router
const router = express.Router();

router.get('/seed', (req, res) => {
    const startPosts = [
        { name: "Orange", color: "orange" },
        { name: "Grape", color: "purple" },
        { name: "Banana", color: "orange" },
        { name: "Strawberry", color: "red" },
        { name: "Coconut", color: "brown" },
    ]

     // Delete all fruits
     Post.deleteMany({}).then((data) => {
        Post.create(startPosts).then((data) => {
            res.json(data);
        })
    }).catch((err) => {
        res.status(400).send(err)
    })
})

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

// Create
router.post('/', (req, res) => {
    Post.create(req.body)
        .then((createdPost) => {
            res.redirect(`/posts/${createdPost._id}`)
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})

// Edit
router.get('/:id/edit', (req, res) => {
    const {id} = req.params
    Post.findById(id)
        .then((post) => {
            res.render('posts/Edit', { post })
        })
        .catch((error) => {
            res.status(400).json({error})
        })
})

// Show
router.get('/:id', (req, res) => {
    const {id} = req.params;
    
        Post.findById(id)
            .then((post) => {
                res.render('posts/Show', { post })   
            })
            .catch((error)=> {
                res.status(400).json({ error })
            })
})

module.exports = router;