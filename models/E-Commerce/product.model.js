import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    descreption: {
      Type: String,
      required: true,
    },
    name: {
      Type: String,
      required: true,
    },
    productImage: {
      Type: String,
    },
    price: {
      type: Number,
      default: 0,
    },
    stock: {
      type: Number,
      default: 0,
    },
    category: {
      type: mongoose.Schema.ObjectId,
      ref: 'Category',
      required: true,
    },
    owner: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model('Product', productSchema);
