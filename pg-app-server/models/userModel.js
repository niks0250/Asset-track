// const mongoose = require('mongoose');
import mongoose from "mongoose";
const Schema = mongoose.Schema;
let userSchema = new Schema({
   email: {
      type: String,
      required: true
   },
   password: {
      type: String,
      required: true
   }
},{
   timestamps: true,
   collection: 'users'
})
export const User = mongoose.model('User', userSchema);