'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('studentCourses', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      studentName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      courseName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      courseCode: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      mark: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      remark: {
        type: Sequelize.STRING
      },
      studentId:{
        type: Sequelize.UUID,
        allowNull: false,
        foreignKey: true,
        references: {
          model:"studentTables",
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
    await queryInterface.dropTable('studentCourses');
  }
};