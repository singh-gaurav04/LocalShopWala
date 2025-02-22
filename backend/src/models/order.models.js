const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            required: true,
        },
        products: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "product",
        }],
        totolPrice:{
            type: Number,
            required: true,
            default: 0,
        },
        status:{
            type: String,
            enum: ["pending", "packed", "shipped", "delivered"],
            required: true,
            default: "pending",
        },
        payment:{
            type: String,
            enum: ["pending", "done"],
            required: true,
            default: "pending",
        }
})

module.exports = mongoose.model("order", orderSchema);