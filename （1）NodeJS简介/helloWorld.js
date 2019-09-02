const http=require("http");

var server=http.createServer(function(req,res){
    res.write("hello world");
    res.end();
});
server.listen(8081);
console.log("server is listening 8081");
/*
shift+鼠标右键  点击打开power shell窗口
编译node.js文件 node 文件名
每次修改了js文件之后，需要重新执行node 文件名
 */