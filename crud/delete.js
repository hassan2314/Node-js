const dbConnect= require('./mongodb');

const deleteData=async ()=>{
    const data= await dbConnect();
    const res= await data.deleteOne({name:'F23'})
    console.warn(res);
}
deleteData();