const dbConnect = require("./mongodb");
// dbConnect().then((resp) => {
//     resp
//       .find()
//       .toArray()
//       .then((data) => {
//         console.warn(data);
//       });
//   });
const main = async () => {
  // console.log("Main Function");
  let data = await dbConnect();
  data = await data.find().toArray();
  console.warn(data);
};

main();
