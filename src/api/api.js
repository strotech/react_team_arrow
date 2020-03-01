const express = require('express');
const app= express();
var cors = require('cors')
const datas =require("./testDataApi")

app.use(cors())

//home route
app.get('/arrowteam',function(req,res){
    res.send(datas)
})

app.listen(9001,function(){
    console.log('Server started on port 9001......')
})