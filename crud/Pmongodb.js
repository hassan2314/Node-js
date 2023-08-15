const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
async function dbConnect() {
  await client.connect();
  let db = client.db("e-comm");
  return db.collection("products");
}
dbConnect().then((resp) => {
  resp
    .find()
    .toArray()
    .then((data) => {
      console.warn(data);
    });
});
