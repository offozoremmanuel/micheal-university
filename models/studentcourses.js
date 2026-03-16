'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class studentCourses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  studentCourses.init({
    id:{
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      primaryKey:true
    },
    studentName: DataTypes.STRING,
    courseName: DataTypes.STRING,
    courseCode: DataTypes.STRING,
    mark: DataTypes.INTEGER,
    remark: DataTypes.STRING,
    studentId: DataTypes.UUIDV4
  }, {
    sequelize,
    modelName: 'studentCourses',
  });
  return studentCourses;
};