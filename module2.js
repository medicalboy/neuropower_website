const MonkeyLearn = require('monkeylearn')

const ml = new MonkeyLearn('6959f73ca7e9e362c3966c921b55f55d47b00166')
let model_id = 'ex_YCya9nrn'

// // import express
// const { request, response } = require("express");
const express = require("express");
var bodyParser = require("body-parser");
const e = require('express');
// //creat application object
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// Create routing rules
// //request是对请求报文的封装
// //response 是对响应报文的封装
app.get('/server',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*'); 
// set up response
    response.send(daan);
});

app.post('/server',(request,response)=>{
    var userinput = request.body;
    var fininput = Object.keys(userinput)[0];
    var data = [fininput];
    var dean ="";
    ml.extractors.extract(model_id, data).then(res => {
    res.body[0].extractions.forEach(element => {
        dean = dean + "KETWORD : " + element["parsed_value"] +'\n'
    });
    response.setHeader('Access-Control-Allow-Origin','*'); 
    // set up response
    response.send(dean);
    })
})
// //listening port
app.listen(8080,()=>{
    console.log("server has been set up,8080");
});
