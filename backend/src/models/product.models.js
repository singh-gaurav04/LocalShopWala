const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  stock: {
    type: Boolean,
    required: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  productPic: {
    type: String, //maybe we will use cloudinary to store images
    required: true,
  }, // later we will add reviews and ratings
});

module.exports = mongoose.model("product", productSchema);
