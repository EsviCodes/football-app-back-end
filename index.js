// Import express.
const express = require("express");
// const db = require("./db");
//const Team = require("./team/model");
const teamRouter = require("./team/router");
const playerRouter = require("./player/router");
const bodyParser = require("body-parser");
//const Player = require("./player/model");

// Declare a constant named app and set it to the output of the express function.
const app = express();
const jsonParser = bodyParser.json();

// Declare a constant named port equal to the process.env.PORT if it is defined. If it is not defined, use the number 4000, like const port = process.env.PORT || 4000
const port = process.env.PORT || 4000;

// Middleware
//app.use(bodyParser.urlencoded({ extended: false })); // not mandotary
app.use(jsonParser); // USE THESE BEFORE THE ROUTE!
app.use(teamRouter);
app.use(playerRouter);

// Pass the port and a logging function to app.listen to start the server.
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

/* 
You can also do:
app
.use(//)
.listen(//)
*/
