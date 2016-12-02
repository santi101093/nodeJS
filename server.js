var http=require('http');
var url=require('url');
var fs=require('fs');
var server= http.createServer();

server.on("request", function(req,res){
	var urlData = url.parse(req.url,true);
	var pathname = "public" + urlData.pathname;

	fs.exists(pathname, function(exists){
		if (exists){
			fs.readFile(pathname, function (err, html) {
		    if (err) {
		        throw err;
		    }       
		    res.end(html);
			});
		}else{
			res.writeHead(404);
			fs.readFile("public/pages/error.html", function (err, html) {
				if (err) {
					throw err;
				}
				res.end(html);
			});
		}
	});
});

server.listen(process.env.PORT || 3000);


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