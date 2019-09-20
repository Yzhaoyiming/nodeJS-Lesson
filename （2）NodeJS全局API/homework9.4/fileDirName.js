const http=require("http");
const http=require("fs");
const http=require("path");

var server=http.createServer(function(req,res){
    var filePath=path.join(__dirname,"/views/view.html");//拼接路径
    var fileContent=fs.readFileSync(filePath);
    fileContent=fileContent.toString("utf8");
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(fileContent);
    res.end();

})
server.listen(8080);
console.log("server is listening 8080");