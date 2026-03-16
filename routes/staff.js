const router = require('express').Router();
const {createStaff}= require('../controller/staff')

 router.post('/staff/:facultyId', createStaff);


 module.exports = router