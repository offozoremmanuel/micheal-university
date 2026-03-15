'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('staffTables', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      staffName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      staffCode: {
        type: Sequelize.STRING,
        allowNull: false
      },
      gender: {
        type: Sequelize.ENUM('Male','Female'),
        allowNull: false
      },
      qualification: {
        type: Sequelize.STRING,
        allowNull: false
      },
      dateJoined: {
        type: Sequelize.DATE,
        allowNull: false
      },
      facultyId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model:"faculties",
          key: "id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
      
      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('staffTables');
  }
};