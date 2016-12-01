var http=require('http');
var url=require('url');
var fs=require('fs');

var urlData = url.parse(req.url,true);
var pathname = "public" + urlData.pathname;
fs.readFile('pathname', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(process.env.PORT || 3000);
});

// var http = require("http"); //ej anterior de reloj
// var server= http.createServer();

// server.on("request", function(req,res){
// 	res.end(getHour());
// });

// server.listen(process.env.PORT || 3000);

// function getHour(){
// 	var currentdate = new Date();
// 	var datetime = "" + currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();
// 	return datetime;
// }