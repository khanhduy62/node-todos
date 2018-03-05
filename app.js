var express = require("express")
var bodyParser = require("body-parser")
var morgan = require("morgan")
var config = require("./config")
var mongoose = require("mongoose")
var Schema = mongoose.Schema

var app = express();
var port = process.env.PORT || 3000 ;

app.use("/assets", express.static(__dirname + "/public"));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
 
// parse application/json
app.use(bodyParser.json())
app.use(morgan('dev'))
app.set("view engine", "ejs")


// db info 
mongoose.connect(config.getDbConnectionString())

app.get("/", (req, res)=>{
    res.render("index.ejs", {
        param: null
    });
})

app.post("/click", (req, res)=>{
    console.log("object ", req.body)
    res.end()
})

app.post("/", (req, res)=>{
    console.log("your name ", req.body)
    res.json({
        name: req.body.name
    })
    res.render("index.ejs", {
        param: req.body
    });
})

app.listen(port, ()=>{
    console.log("App is listening on "+port)
})