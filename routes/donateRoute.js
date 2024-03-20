const express = require("express")
const router = express.Router()
const { getAlldonates,getdonate,createdonate } = require("../controller/donateController")

router.route("/").get(getAlldonates).post(createdonate)
router.route("/:id").get(getdonate)

module.exports = router