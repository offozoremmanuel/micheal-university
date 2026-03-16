const router = require("express").Router()

const { createStudentCourse} = require("../controller/studentCourses")

router.post ("/studentCOurses/:studentId", createStudentCourse)

module.exports = router
