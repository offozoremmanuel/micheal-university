const { DATE } = require('sequelize');
const {faculties} = require('../models');
exports.createFaculty = async (req, res) =>{
   try {
     const {facultiyName, dean,  dateCreated} = req.body;
     const splitFm = facultiyName.split(" ");
     const formatFm = `${splitFm[0].charAt(0).toUpperCase()}${splitFm[2].charAt(0).toUpperCase()}${splitFm[3].charAt(0).toUpperCase()}`
    const newfaculty = await faculties.create({
       facultiyName,
       dean, 
       facultyCode: formatFm,
       dateCreated
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