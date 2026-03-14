'use strict';

const departmenttable = require('../models/departmenttable');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('departmentTables', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4
      },
      departmentName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      departmentCode: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      HOD: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      dateCreated:{
        type:Sequelize.DATE,
        allowNull: false
      },
      facultyId: {
        type: Sequelize.UUID,
        allowNull:false,
        foreignKey: true,
        references: {
          model: "faculties",
          key: "id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('departmentTables');
  }
};