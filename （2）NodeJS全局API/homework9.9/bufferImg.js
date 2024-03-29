const http = require("http");
const fs = require("fs");
const path = require("path");
http.createServer(function(req, res) {
    var imgPath = path.join(__dirname, "1.png")
    var imgBuffer = fs.readFileSync(imgPath);
    // console.log(imgBuffer);
    var base64Data = imgBuffer.toString("base64");
    // console.log(base64Data);
    var imgSrc = "data:image/png; base64," + base64Data;
    var htmlStr = "<!DOCTYPE html><head></head><body><img src='" + imgSrc + "'></body>";
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(htmlStr);
    res.end();

}).listen(8081);

console.log("server is listening 8081");