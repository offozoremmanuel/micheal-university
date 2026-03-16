const {studentCourse}= require('../models')


// const remarkFormat = (mark) => {
//            if (mark >= 70 || mark <= 100){
//             return "excellent"
//            }else if (mark >=41 || mark <= 69){
//             return "pass"
//            }else{
//             return "fail"
//            }
//         }

exports.createStudentCourse= async(req, res) =>{
    try {
        const { studentName, courseName, courseCode, mark } = req.body
        const { studentId } = req.params

        const remarkFormat = (mark) => {
           if (mark >= 70 || mark <= 100){
            return "excellent"
           }else if (mark >=41 || mark <= 69){
            return "pass"
           }else{
            return "fail"
           }
        }
        const remark = remarkFormat(mark)
        const newStudentCourse = await studentCourse.create({
            studentName,
            courseName,
            courseCode,
            mark,
            remark,
            studentId,
        })
        res.status(201).json({
            message: "Student courses gotten successfully",
            data: newStudentCourse
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            message: "Something went wrong"
        })
    }
}