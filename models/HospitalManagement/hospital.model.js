import mongoose from 'mongoose';

const hospiSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    addressLine1: {
      type: String,
      required: true,
    },
    addressLine2: {
      type: String,
    },
    city: {
      type: String,
      required: true,
    },
    pincode: {
      type: String,
      required: true,
    },
    specilizedIn: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Hospital = mongoose.model('Hospital', hospiSchema);
