const router = require('express').Router();
const { createStudent } = require('../controller/student');

 router.post('/sudent/:departmentId', createStudent);


 module.exports = router