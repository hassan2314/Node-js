const express= require('express');
const app= express();
const reqFilter=(req,res,next)=>{
    if(!req.query.age){
        res.send("Provide age");
    }
    else if(req.query.age<18){
        res.send("You can't Access");
    }
    else{
        next();
    }
}
//app.use(reqFilter);

app.get('/',reqFilter,(req,res)=>{
    res.send("You Can Access");
});
app.get('/user',(req,res)=>{
    res.send("Hi ! User");
});
app.listen(4500);