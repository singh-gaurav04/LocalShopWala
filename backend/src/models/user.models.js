const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  state: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  city: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  street: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  pincode: {
    type: Number,
    required: true,
    lowercase: true,
    trim: true,
  },
  landmark: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  isDefault: {
    type: Boolean,
    default: true,
    required: true,
    lowercase: true,
    trim: true,
  },
});

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      lowercase: true,
      trim: true,
    },
    phone: {
      type: Number,
      lowercase: true,
      trim: true,
    },
    addresses: [addressSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);
