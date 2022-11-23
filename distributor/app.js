const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({ path: './config.env' });

require('./db/conn');
const User = require('./model/userSchema');

/*data json ko nhi smj rha */
app.use(express.json());

// we link the router files to make our route easy 
app.use(require('./router/auth'));

const PORT = process.env.PORT;




app.get('/contact', (req, res) => {
    res.send(`Hello Contact world from the server`);
});



app.listen(PORT, () => {
    console.log(`listening no ${PORT} ......`);
})


