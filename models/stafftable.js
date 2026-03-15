'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class staffTable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  staffTable.init({
    id:{type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4,primaryKey: true},
    staffName: DataTypes.STRING,
    staffCode: DataTypes.STRING,
    gender: DataTypes.ENUM('Male','Female'),
    qualification: DataTypes.STRING,
    dateJoined: DataTypes.STRING,
    facultyId: DataTypes.UUIDV4,
    dateJoined: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'staffTable',
  });
  return staffTable;
};