const router = require('express').Router();
const {createFaculty}= require('../controller/faculty')
 router.post('/faculty', createFaculty);


 module.exports = router