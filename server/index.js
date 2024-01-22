const express = require("express");
//const { default: mongoose } = require("mongoose");
const app = express();
const mongoose= require("mongoose");
const userModel = require("./models/users");



app.get("/getusers", async (req, res) => {
    try {
      const users = await userModel.find({});
      res.json(users);
    } catch (err) {
      res.json(err);
    }
  });
  


const startApp = async () =>{
    try{
        await mongoose.connect("mongodb+srv://username:password@clusterproject2.7etgynu.mongodb.net/?retryWrites=true&w=majority");
app.listen(3001, ()=>{
    console.log("server runs perfectly!")
})
    }catch(error){
        console.log(error)
    }

}
startApp()
