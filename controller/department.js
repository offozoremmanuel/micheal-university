const { departmentTable } = require("../models")
const { faculties } = require("../models")


exports.createDept = async(req, res) =>{
    try{
        const {departmentName, HOD } = req.body
        const {facultyId} = req.params
        const splitDep = departmentName.split(" ")
        const formatDepName = `${splitDep[0].charAt(0).toUpperCase()}${splitDep[2].charAt(0).toUpperCase()}${splitDep[3].charAt(0).toUpperCase()}`


        const newCode = await faculties.findByPk(facultyId)
        console.log(newCode.facultyCode)
        const falCode = newCode.facultyCode
        const departmentCode = `${falCode}-${formatDepName}`
        console.log(departmentCode)

        const dateCreated = new Date()
        
        const newDept = await departmentTable.create({
            departmentName, 
            departmentCode, 
            HOD,
            facultyId,
            dateCreated

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