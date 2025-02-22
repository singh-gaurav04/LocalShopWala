const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
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
    }
})

module.exports = mongoose.model("cart", cartSchema);