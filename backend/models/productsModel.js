const mongoose = require("mongoose")
const Schema = mongoose.Schema

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        default: "product"
    },
    description: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    tags: {
        type: Array,
        required: true
    },
    rating: {
        type: Number,
        min: [1, "Rating should not less than one."],
        max: [5, "Rating can't exceed five."],
        default: 1
    },
    reviews: [{
        reviewID: {
            type: mongoose.Schema.ObjectId,
            required: [true, "Review ID is mandatory"],
            unique: [true, "Review ID should be Unique"]
        },
        clientID: {
            type: String,
            required: true
        },
        comment: {
            type: String,
            required: true
        },
        commentedAt: {
            type: String,
            required: true
        }
    }],
    stock: {
        type: Number,
        required: true
    },
    sold: {
        type: Number,
        default: 0
    },
    from: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
})

const productModel = mongoose.model("product", productSchema)

module.exports = productModel