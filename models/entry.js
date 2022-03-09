const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
    title: String,
    entry: String,
    date: String,
},
{
    timestamps: true
}
);

const Entry = mongoose.model('Entry', entrySchema)

module.exports = Entry;