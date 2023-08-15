const dbConnect= require('./mongodb');

const update=async ()=>{
    const db= await dbConnect();
    let res= await db.updateOne(
        {name:'F30'},
       { $set: {price:300, name:'F30s'}}
    )
    console.warn(res.modifiedCount)
        return (res.modifiedCount);
};
const res=update();
if(res===1)
    console.log("Data Updated");
else
    console.warn("Error")