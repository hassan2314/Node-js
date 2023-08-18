const mongoose = require("mongoose");

const Insert = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/e-comm");

  const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    catagory: String,
  });
  const ProductModel = mongoose.model("products", ProductSchema);
  let data = new ProductModel({
    name: "First",
    price: 300,
    catagory: "Mobile",
    brand: "New",
  });
  let result = await data.save();
  console.log(result);
};
// Insert();


const Update = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/e-comm");

  const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    catagory: String,
  });
  const ProductModel = mongoose.model("products", ProductSchema);
  let data = await ProductModel.updateMany(
    { name: "First" },
    {$set:{brand:"Bezzey"}}
    );
  
  console.log(data);
};
//Update();


const Delete = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/e-comm");

  const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    catagory: String,
  });
  const ProductModel = mongoose.model("products", ProductSchema);
  let data = await ProductModel.deleteOne(
    { name: "First" }
    );
  
  console.log(data);
};
// Delete();


const Read = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/e-comm");

  const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    catagory: String,
  });
  const ProductModel = mongoose.model("products", ProductSchema);
  let data = await ProductModel.find();
  
  console.log(data);
};
Read();





// const main = async () => {
//     try {
//         await mongoose.connect("mongodb://127.0.0.1:27017/e-comm");

//         console.log("Connected to MongoDB");

//         const ProductSchema = new mongoose.Schema({
//             name: String,
//             price: Number
//         });
//         const ProductModel = mongoose.model('products', ProductSchema);

//         let data = new ProductModel({ name: "First", price: 300 });
//         let result = await data.save();
//         console.log(result);

//         mongoose.disconnect();
//         console.log("Disconnected from MongoDB");
//     } catch (error) {
//         console.error("Error:", error);
//     }
// };

// main();
