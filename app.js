const express = require("express");
const bp = require("body-parser");
const fetch = require("node-fetch");
const app = express();
const dolarRoute = require("./router/dolar")

page = __dirname + "/views/";
app.use(express.static(__dirname + "/public"));
app.use(bp.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req,res) =>{
    res.sendFile(page, "index.html");
    
});


app.use("/dolar", (dolarRoute));
module.exports =  app;