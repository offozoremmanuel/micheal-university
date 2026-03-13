'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class faculties extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  faculties.init({
    id:{
       type:DataTypes.UUID,
       defaultValue:DataTypes.UUIDV4,
       primaryKey:true
    },
    facultiyName: DataTypes.STRING,
    dean: DataTypes.STRING,
    facultyCode: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'faculties',
  });
  return faculties;
};