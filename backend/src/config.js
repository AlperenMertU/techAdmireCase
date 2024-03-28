/* const mongoose = require("mongoose");
require("dotenv").config();

const connect = mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


connect.then(() => {
  console.log("Succesfully");
})
  .catch(() => {
    console.log("Can'not");
  })

const LoginSchema = new mongoose.Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
})

const collection = new mongoose.model("User", LoginSchema)


module.exports = collection */

 const mongoose = require("mongoose")

//conncet my database
const connect = mongoose.connect("")


connect.then(() => {
console.log("Succesfully");
})
.catch(() => {
  console.log("Can'not");
})

//create my values in my databes
const LoginSchema = new mongoose.Schema({
name: { type: String, required: true },
surname: { type: String, required: true },
email: { type: String, required: true, unique: true },
password: { type: String, required: true },
})

const collection = new mongoose.model("User", LoginSchema)


module.exports = collection 
 