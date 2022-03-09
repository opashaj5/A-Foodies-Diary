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

module.exports = router;