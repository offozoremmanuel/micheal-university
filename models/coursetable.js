'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class courseTable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  courseTable.init({
    id:{
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      primaryKey:true
    },
    courseName: DataTypes.STRING,
    courseCode: DataTypes.STRING,
    department: DataTypes.STRING,
    lecturerName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'courseTable',
  });
  return courseTable;
};