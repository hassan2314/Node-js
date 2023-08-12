const fs=require('fs');
const path= require('path');
const dirPath=path.join(__dirname,'files');
// for(var i=0;i<5;i++){
//     fs.writeFileSync(dirPath+"/hello"+i+".txt","Content");
// }
// // fs.writeFileSync(dirPath+"/hello.txt","Content");
// console.log("Created");
// fs.readFile(dirPath+"/hello.txt","utf8",(err,item)=>{
//     if(err) throw err;
//     console.log(item);
// })
fs.appendFile(dirPath+"/hello.txt"," and File name is hello.txt",(err)=>{
    if(!err) console.log("File Updated");
});
fs.readFile(dirPath+"/hello.txt","utf8",(err,item)=>{
         if(err) throw err;
         console.log(item);
     })