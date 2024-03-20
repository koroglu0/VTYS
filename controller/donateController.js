const asyncHandler = require("express-async-handler")
const donateDb = require("../models/donateModel")

const getAlldonates = asyncHandler(async (req, res) => {
    const donate = await donateDb.find().limit(52)
    res.status(200).json(donate)
})

const getdonate = asyncHandler(async (req, res) => {
    const donate = await donateDb.findById(req.params.id)
    if (!donate) {
        res.status(404)
        throw new Error("Not found")
    }
    res.status(200).json(donate)
})

const createdonate = asyncHandler(async (req, res) => {
    const { name, surname, address ,phone, bookName , bookType , author , description } = req.body
    if (!name || !surname || !phone || !address || !bookName || !bookType || !author || !description) {
        res.status(400)
        throw new Error("Fill in the blanks")
    }
    const donate = await donateDb.create({
        name,
        surname,
        address,
        phone,
        bookName,
        bookType,
        author,
        description,
        // user_id: req.user.id
    })
    res.status(201).json(donate)
})


module.exports = {
    getAlldonates,
    getdonate,
    createdonate
}