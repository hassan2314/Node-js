const express= require('express');
const app= express();
app.get('',(req,res)=>{
     res.send("Hello");
})
app.get('/bye',(req,res)=>{
     res.send("Bye");
})
app.get('/good',(req,res)=>{
     res.send("Good");
})
app.listen(4500);