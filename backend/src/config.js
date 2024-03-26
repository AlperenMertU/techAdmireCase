const mongoose = require("mongoose")
const connect = mongoose.connect("mongodb+srv://admin:sagopakajmer123456@demo-cluster.p5xgkyz.mongodb.net/?retryWrites=true&w=majority&appName=demo-cluster")


connect.then(()=>{
  console.log("Succesfully");
})
.catch(()=>{
    console.log("Can'not");
})

const LoginSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
})

const collection = new mongoose.model("User", LoginSchema )


module.exports = collection
