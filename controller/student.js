const {studentTables}= require('../models')

exports.createStudent= async(req, res) =>{
    try {
        const {studentName, gender, age } = req.body
        const { departmentId } = req.params
        const dateJoined = new Date
        const matricNumber = Math.round(Math.round() * 1e15).toString(36).toUpperCase()
        const newStudent = await studentTables.create({
            studentName: studentName.split(' ').map(e => e[0].toUpperCase() + e.slice(1).toLowerCase()).join(' '),
            matricNumber,
            gender,
            age,
            dateJoined,
            departmentId
        })
        res.status(201).json({
            message: "Created student successfully",
            data: newStudent
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            message: "Something went wrong"
        })
    }
}