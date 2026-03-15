const router = require('express').Router();
const { createCourse } = require('../controller/courses');

 router.post('/course', createCourse);


 module.exports = router