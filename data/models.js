import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    picture: {
        type: String,
    },
    token: {
        type: Number,
    },

}, {timestamps: true});


const workspaceSchema = new mongoose.Schema({
    messages: {
        type: Schema.Types.Mixed,
       
    },
    fileData: {
        type: Schema.Types.Mixed,
  
    },
    user:{
        type:mongoose.Schema.Types.ObjectId, 
        ref:"users",
    },
    

}, {timestamps: true});



const agribotSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique:true,
       
    },
    desc: {
        type: String,
        required: true,
  
    },
    price: {
        type: Number,
        required: true,
        min: 0,
       
    },
    stock: {
        type: Number,
        required: true,
        min: 0,
       
    },
    img: {
        type: String,
    },
    speciality: {
        type: String,
       
    },
    height:{
        type: Number,

    },
    weight: {
        type: Number,
    },

}, {timestamps: true});


export const User = mongoose.models?.User || mongoose.model("User", userSchema);

export const Workspace = mongoose.models?.Workspace || mongoose.model("Workspace", workspaceSchema);

export const Agribot = mongoose.models?.Agribot || mongoose.model("Agribot", agribotSchema);