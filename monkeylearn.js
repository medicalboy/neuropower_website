//imoort monkeylearn
const MonkeyLearn = require('monkeylearn')
const ml = new MonkeyLearn('6959f73ca7e9e362c3966c921b55f55d47b00166')
var model_id = 'cl_pi3C7JiL'
// // import express
// const { request, response } = require("express");
const express = require("express");
var bodyParser = require("body-parser");
// //creat application object
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// //创建路有规则
// //request是对请求报文的封装
// //response 是对响应报文的封装
app.get('/server',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*'); 
//     set up response
    response.send(daan);
});

app.post('/server',(request,response)=>{
    var userinput = request.body;
    var fininput = Object.keys(userinput)[0];
    var data = [fininput];
    ml.classifiers.classify(model_id, data).then(res => {
    var daan = res.body[0].classifications[0]['tag_name'];
    response.setHeader('Access-Control-Allow-Origin','*'); 
    //     //设置响应
        response.send(daan);
    })
});
// //监听端口
app.listen(8000,()=>{
    console.log("server has been set up,8000");
});
