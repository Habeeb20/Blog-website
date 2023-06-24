const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const expressSanitizer = require("express-sanitizer")
const controller = require('./controllers/controller');
const mongoose = require("mongoose");
const connectdb = require('./dbconnection/dbconnect');
const request = require("request")
const PORT= (process.env.port || 19000)
const errhandler = require('./middleware/errorhandler');
app.listen(PORT)


connectdb();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}))
app.use(expressSanitizer())
app.use(express.static("public"))
app.use("/", require("./route/route"));
app.use(errhandler);
app.use(methodOverride("_method"));








console.log("server is running on port " + PORT)