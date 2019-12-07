
var request = require('request');
var tableify = require('tableify');
var json2html = require('node-json2html');
const app = require('express')();
app.get("/GetData",(req,resp,next)=>
{
    resp.send("Hello");
})
app.listen(80);

