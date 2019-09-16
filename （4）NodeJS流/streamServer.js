const http=require("http");
const path=require("path");
const fs=require("fs");
http.createServer(function(req,res){
    var filePath=path.join(__dirname,"/data.txt");
    //streamReader得到的是一个可读流对象
    var streamReader=fs.createReadStream(filePath);
    //pipe（）管道
    //res是http的响应对象，res是一个可写流对象
    //destination(数据目标)
    streamReader.pipe(res);

}).listen(8081);
console.log("Server is listening 8081");
