const {faculties} = require('../models');
exports.createFaculty = async (req, res) =>{
   try {
     const {facultiyName, dean, facultyCode} = req.body;
    const newfaculty = await faculties.create({
       facultiyName,
       dean, 
       facultyCode
    })
    res.status(201).json({
        message:'faculty created successfully',
        data: newfaculty
    })
   } catch (error) {
    console.log(error.message)
    res.status(500).json({
        message:'something went wrong'
    })
   }
}