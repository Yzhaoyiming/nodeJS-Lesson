const http=require("http");

var server=http.createServer(function(req,res){
    res.write("hello world");
    //响应结束
    res.end();
});
server.listen(8080);
console.log("server is listening 8080");

