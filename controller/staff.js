const {staffTables} = require('../models')

exports.createStaff = async(req, res)=>{
    try {
        const {staffName,staffCode,gender,qualification}= req.body
        const {facultyId} = req.params
        const newStaff = await staffTables.create({
            staffName,
            staffCode,
            gender,
            qualification,
            facultyId
        })
        res.status(201).json({
            message: "Created staff table",
            data: newStaff
        })
    } catch (error) {
        res.status(500).json({
            message:"Something went wrong"
        })
    }
}