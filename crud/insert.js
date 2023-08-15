const dbConnect = require("./mongodb");

const insert=async ()=>{
    const db= await dbConnect();
   const result= await db.insertMany([
    {
    name:'F23', brand:'Oppo', price:200, catagory:'Mobile'
   },
    {
    name:'F20', brand:'Oppo', price:220, catagory:'Mobile'
   },
    {
    name:'F30', brand:'Oppo', price:200, catagory:'Mobile'
   }
])
   return result.acknowledged;
}
const res=insert();
if(res)
    console.log("Data Insert");
else
    console.warn("Error")