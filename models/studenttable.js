'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class studentTable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  studentTable.init({
    id:{
       type:DataTypes.UUID,
       defaultValue:DataTypes.UUIDV4,
       primaryKey:true
    },
    studentName: DataTypes.STRING,
    matricNumber: DataTypes.STRING,
    gender: DataTypes.ENUM('Male', 'Female'),
    age: DataTypes.INTEGER,
    dateJoined: DataTypes.DATE,
    dapartmentId: DataTypes.UUIDV4
  }, {
    sequelize,
    modelName: 'studentTable',
  });
  return studentTable;
};