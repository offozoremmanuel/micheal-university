const router = require('express').Router();
const {createStaff}= require('../controller/staff')

 router.post('/staff', createStaff);


 module.exports = router