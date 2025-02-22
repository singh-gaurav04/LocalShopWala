const mongoose = require("mongoose");

const deliverySchema = new mongoose.Schema(
  {
    order: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "order",
      required: true,
    },
    // address:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "address",
    //     required: true,
    // },
    deliveryboy: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "packed", "shipped", "delivered"],
      required: true,
      default: "pending",
    },
    trackingId: {
      type: String,
      required: true,
    },
    estimatedDeliveryTime: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("delivery", deliverySchema);
