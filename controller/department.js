const { departmentTable } = require("../models")

exports.createDept = async(req, res) =>{
    try{
        const {departmentName, departmentCode, HOD } = req.body
        const {facultyId} = req.params

        const newDept = await departmentTable.create({
            departmentName, 
            departmentCode, 
            HOD,
            facultyId
        })
        res.status(201).json({
            message: "Department created successfully",
            data: newDept
        })
    }catch(error){
        console.log(error.message)
        res.status(500).json({
            message: "Something went wrong"
        })
    }
}