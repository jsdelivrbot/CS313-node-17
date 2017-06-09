var http = require("http");
var url = require("url");

function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    if (pathname == "/home") {
        response.writeHead(404, {"Content-Type": "text/html"});
        response.write("Welcome to the Home Page.");
    }

    else if (pathname == "/getData") {
        response.writeHead(200, {"Content-Type": "application/json"});
        response.write("name : Preston Hon class : cs313");
    }
    else{
    	response.statusCode = 404;
    }
    response.end();
}

http.createServer(onRequest).listen(8888);
console.log("Server has started.");