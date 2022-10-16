import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
})
const userModel = mongoose.model("users", schema);
export default userModel;