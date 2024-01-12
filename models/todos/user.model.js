import mongoose from 'mongoose';
const userSchema = new mongoose.Schema(
  {
    // data here
    // username:String,
    // email:String,
    // isActive:Boolean

    // another method to declare
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      // required:true
      required: [true, 'password is required'],
    },
  },
  { timestamps: true }
);
export const User = mongoose.model('User', userSchema);
