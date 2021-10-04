//Express Server & Dependencies
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const env = require("dotenv");
const path = require("path");

//PORT
const port = process.env.PORT || 3003;

//ENV
env.config();

//Server
const app = express();

app.use(
    cors({
        origin: "*",
        credentials:true,
    })
)
app.use(logger('dev'))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "../client", 'build')));
app.use(require('./routes'))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
})

//Routes
app.listen(port, () => {
    console.log('Server is connected to ' + port);
})


