'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Destinacijes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      putanja: {
        type: Sequelize.STRING
      },
      drzava: {
        type: Sequelize.STRING
      },
    jezik: {
      type: Sequelize.STRING
    },
    valuta: {
      type: Sequelize.STRING
    },
    restorani: {
      type: Sequelize.STRING
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
    await queryInterface.dropTable('Destinacijes');
  }
};