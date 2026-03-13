const router = require("express").Router()

const { createDept } = require("../controller/department")

router.post("/department/:facultyId", createDept)

module.exports = router
