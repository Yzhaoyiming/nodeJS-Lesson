const http=require("http");

var server=http.createServer(function(req,res){
    res.write("hello world");
    //响应结束
    res.end();
});
server.listen(8081);
console.log("server is listening 8081");
/*
shift+鼠标右键  点击打开power shell窗口
编译node.js文件 node 文件名
每次修改了js文件之后，需要重新执行node 文件名


在新网页的网址栏输入localhost：8080/，同时打开Powershell
 */