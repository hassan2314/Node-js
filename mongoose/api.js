const express= require('express');
require('./config');
const product= require('./products');


const app= express();
app.use(express.json())


 app.post('/create',async (req,res)=>{
    let data = new product(req.body)
    let result= await data.save();
    console.log(req.body);
    res.send(result);
    console.log(result)
 });
 app.listen(4500);

 app.get('/list', async (req,res)=>{
   let data= await product.find();
   console.log(data);
   res.send(data);
 });

 app.delete('/delete/:_id',async (req,res)=>{
   let data= await product.deleteOne(req.params);
   console.log(data);
   res.send("Deleted");
 })


 app.put('/update/:_id',async (req,res)=>{
   let data= await product.updateOne(
      req.params,
      {$set:req.body}
   );
   console.log(data);
   res.send("Updated");
 })


 app.get('/search/:key',async (req,res)=>{
   let data= await product.find(
      {"$or": [
         {"name" : {$regex:req.params.key}},
         {"brand" : {$regex:req.params.key}},
         {"catagory" : {$regex:req.params.key}}
      ]}
   );
   console.log(data);
   res.send(data);
 })



