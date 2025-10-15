// import mongoose from "mongoose";
// const userSchema = new mongoose.Schema({
//     fullName:{
//         type:String,
//         require:true
//     },
//     email:{
//         type:String,
//         require:true
//     },
//     password:{
//         type:String,
//         require:true
//     },
// },{timestamps:true});

// export const User = mongoose.model("User",userSchema);
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    pin: {
        type: String,
        default: null // optional
    }
}, { timestamps: true });

export const User = mongoose.model("User", userSchema);
