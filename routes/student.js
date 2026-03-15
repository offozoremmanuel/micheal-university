const router = require('express').Router();
const { createStudent } = require('../controller/student');

 router.post('/sudent', createStudent);


 module.exports = router