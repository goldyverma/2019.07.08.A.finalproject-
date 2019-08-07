const http = require('http');
const site = http.createServer(function(req,res){
    console.log("Hello World");
});
site.listen(3000);