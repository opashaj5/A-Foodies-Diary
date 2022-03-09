// Import Our Dependencies
require('dotenv').config(); // Loads Env vars into process.env
const express = require('express'); 
const morgan = require('morgan');
const methodOverride = require('method-override');
const entryController = require('./controllers/entries')
const path = require('path');

// App Object Setup 
const app = express();
app.engine('jsx', require('express-react-views').createEngine());
app.set('view engine', 'jsx');

// Middleware
app.use(morgan("tiny")); // logging
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(express.static("public"));

// Routes
app.use('/entries', entryController)
app.get('/', (req, res) => {
    res.send("Server is running");
})

// Server Listener
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Listening on ${PORT}`))