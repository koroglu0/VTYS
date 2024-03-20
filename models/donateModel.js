const mongoose = require("mongoose")

const donateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Enter username"]
    },
    surname: {
        type: String,
        required: [true, "Enter email"]
    },
    address: {
        type: String,
        required: [true, "Enter password"]
    },
    phone: {
        type: String,
        required: [true, "Enter password"]
    },
    bookName: {
        type: String,
        required: [true, "Enter password"]
    },
    bookType: {
        type: String,
        required: [true, "Enter password"]
    },
    author: {
        type: String,
        required: [true, "Enter password"]
    },
    description: {
        type: String,
        required: [true, "Enter password"]
    }
}, { timestamps: true })

const donateDb = mongoose.model("donate", donateSchema)
module.exports = donateDb