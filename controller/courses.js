const { courseTable } = require('../models');

exports.createCourse = async (req, res) => {
    try {
        const { courseName,departmentName } = req.body;
         const {departmentId} = req.params;
        const coursegen = courseName.split(' ').filter(word => word.length > 0).map(word => word[0]).join('').toUpperCase();
        const randomNum = Math.floor(100 + Math.random() * 700);
        const generatedCode = `${coursegen}-${randomNum}`;

        const newCourse = await courseTable.create({
            courseName,
            courseCode: generatedCode,
            departmentName,
            departmentId
        });

        res.status(201).json({
              message: "Created student successfully",
              data: newCourse
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: "Something went wrong",
         });
    }
};