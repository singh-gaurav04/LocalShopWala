const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
    order:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "order",
    },
    amount:{
        type: Number,
        required: true,
    },
    method:{
        type: String,
        enum: ["card", "cash"],
        required: true,
    },
    transactionId:{
        type: String,
        required: true,
    },
    status:{
        type: String,
        enum: ["pending", "done"],
        required: true,
        default: "pending",
    }
},{timestamps: true})

module.exports = mongoose.model("payment", paymentSchema);