const asyncHandler = require("express-async-handler")
const bookDb = require("../models/bookModel")

const getAllbooks = asyncHandler(async (req, res) => {
    const book = await bookDb.find().limit(52)
    res.status(200).json(book)
})

const getbook = asyncHandler(async (req, res) => {
    const book = await bookDb.findById(req.params.id)
    if (!book) {
        res.status(404)
        throw new Error("Not found")
    }
    res.status(200).json(book)
})

module.exports = {
    getAllbooks,
    getbook
}