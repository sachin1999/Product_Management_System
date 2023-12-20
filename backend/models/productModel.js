import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    id:{
        type:String,
        required:true
    },
    manufacturer_name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true,
    },
    photo:{
        data:Buffer,
        contentType:String
    }
},
    {timestamps:true}
)

export default mongoose.model("Products", productSchema);