var http = require("http");
var server= http.createServer();

server.on("request", function(req,res){
	res.end(getHour());
});

server.listen(3000);

function getHour(){
	var currentdate = new Date();
	var datetime = "" + currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();
	return datetime;
}