// 上传文件的操作
const http = require('http');
const url = require('url');
const path=require('path');
const fs = require('fs');
http.createServer(function(req,res){
    var urlObj = url.parse(req.url,true);
    var pathName=urlObj.pathname;
    if(pathName == '/'){
       showIndex(res);
    }else if(pathName == '/list'){
        showList(res);
    }else if(pathName=='/image.png'){
        showImg(res);
    }else if(pathName=='/upload'&&req.method=='POST'){
        uploadFile(req,res);
    }else if(pathName.indexOf("upload")>=0&&req.method=="GET"){
        var imgSrc=path.join(__dirname,pathName);
        var imgContent=fs.readFileSync(imgSrc);
        res.writeHead(200,{"Content-Type":"image/png"});
        res.end(imgContent);
        
    }else if(pathName=="/getlist"){
        //将upload下的图片响应到前端
        var files=fs.readdirSync(__dirname+"/upload");
        var fileStr=JSON.stringify(files);//转化成字符串
        res.end(fileStr);
    }
}).listen(8081);
console.log("server is listening 8081");
function showIndex(res){
    var indexPath=path.join(__dirname,"index.html");
    var fileContent=fs.readFileSync(indexPath);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end(fileContent);
}
function showImg(res){
    var imgPath=path.join(__dirname,"/image.png");
    var imgContent=fs.readFileSync(imgPath);
    res.writeHead(200,{"Content-Type":"image/png"});
    res.end(imgContent);
}
function showList(res){
    var listPath=path.join(__dirname,"list.html");
    var fileContent=fs.readFileSync(listPath);
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    res.end(fileContent);
}
function uploadFile(req,res){
    var dataStr="";
    req.setEncoding("binary");
    req.on("data",function(chunk){
        dataStr+=chunk;
    })
    req.on("end",function(){
        var dataArr = dataStr.split("\r\n");
        var fileData = dataArr.slice(4,dataArr.length-2);
        var imgData="";
        for(var i = 0; i < fileData.length; i++) {
            imgData += fileData[i] + "\r\n";
        }
        var buf=Buffer.from(imgData,"binary");
        var timer=(new Date()).getTime();
        fs.writeFileSync(__dirname+"\\upload\\"+timer+".png",buf,{"encoding":"binary"});
        res.end("submit success");
    })
}
/**
 * 地址栏中可以发起http请求
 * 超链接发起http
 * 提交表单
 * ajax发起请求
 * 
 */

