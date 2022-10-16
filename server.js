import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import path from 'path';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
import userModel from './model/code.js';

const __dirname = path.dirname(__filename);
const app = express();
dotenv.config();

app.use(bodyParser.urlencoded({extended:true}))

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Server is running.");
  } catch (error) {
    throw error;
  }
};


app.get("/",function(req,res){
    
  res.sendFile(__dirname+"/UI.html");
  
   
  
  })

app.post('/', (req, res) =>{
    var user = new userModel({
        name: req.body.myname
         }); user.save();
        res.send("<h1>Your username has been stored in the Database. </h1>")
    }
);

app.listen(3000, () => {
    connect();
    console.log("Server is running on port 3000")
  })