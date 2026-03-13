'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class departmentTable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    //   models.faculties.hasMany(models.departmentTable, {foreignKey: "facuiltyId", as: "players"})
    }
  }
  departmentTable.init({
    id:{
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      primaryKey:true
    },
    departmentName: DataTypes.STRING,
    departmentCode: DataTypes.STRING,
    HOD: DataTypes.STRING,
    facultyId: DataTypes.UUIDV4
  }, {
    sequelize,
    modelName: 'departmentTable',
  });
  return departmentTable;
};