const stream=require("stream");
var MyReadable= new stream.Readable();
MyReadable.push("a");
MyReadable.push("b");
MyReadable.push("c");
MyReadable.push("d");
MyReadable.push("……");
MyReadable.push("z");
MyReadable.push(null);
MyReadable.pipe(process.stdout);



