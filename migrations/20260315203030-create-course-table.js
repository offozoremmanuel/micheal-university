'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('courseTables', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      courseName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      courseCode: {
        type: Sequelize.STRING,
        unique: true,
      },
      departmentName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      departmentId: {
        type: Sequelize.UUID,
        allowNull: false,
        foreignKey: true,
        references: {
          model:"departmentTables",
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
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('courseTables');
  }
};