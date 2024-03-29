var express = require('express');
var app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended}));
app.use(bodyParser.json());

app.get('/',function(req,res){
    console.log(req.body);
    res.send('GET sent')
})
app.post('/',function(req,res){
 
    console.log(req.body);
    res.send('POST sent')
})
app.put('/',function(req,res){
    res.send('PUT sent')
})
app.delete('/',function(req,res){
    res.send('DELETE sent')
})
app.listen(3000);