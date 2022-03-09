const express = require('express');
const Entry = require("../models/entry");

// Create Router
const router = express.Router();

// Index
router.get('/', (req, res) => {
    Entry.find({})
    .then((entries) => {
        res.render("entries/Index", { entries })
    })
    .catch((error) => {
        res.status(400).json({ error })
    })
})

// New
router.get('/new', (req, res) => {
    res.render('entries/New')
})

// Create
router.post('/', (req, res) => {
    Entry.create(req.body, (err, createdEntry) => {
        if (err) {
            res.status(403).send(err)
        } else {
            console.log(createdEntry)
            res.redirect('/entries')
        }
    })
});

// Show
router.get('/:id', (req, res) => {
    const {id} = req.params;
    
        Entry.findById(id)
            .then((entry) => {
                res.render('entries/Show', { entry })   
            })
            .catch((error)=> {
                res.status(400).json({ error })
            })
})

module.exports = router;