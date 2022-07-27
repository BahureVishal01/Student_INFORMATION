const express = require('express');
const path = require("path");
const handlebars = require("handlebars");
const exphbs = require("express-handlebars");
const db = require("./models/db");
const student = require("./models/student.model");
const studentController = require("./controllers/student.controller");
const { allowInsecurePrototypeAccess } = require("@handlebars/allow-prototype-access");
const bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/student', studentController);
app.get('/', (req, res)=>{
    res.send(`
    <h2>Welcome to Students Database!!</h2>
    <h3>Click here to get access to the <b>
    <a href= "/student/list">Database</a></b></h3>`);
});
app.set("views", path.join(__dirname, "/views/"));

app.engine("hbs", exphbs.engine({
    handlebars: allowInsecurePrototypeAccess(handlebars),
    extname: "hbs",
    defaultLayout: "MainLayout",
    layoutsDir: __dirname+"/views/layouts/",
}) );
app.set("view engine", "hbs");

app.listen(3333, ()=>{
    console.log("Server is started at port 3333");
})