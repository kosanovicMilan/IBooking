'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Korisnicis', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ime: {
        type: Sequelize.STRING
      },
      prezime: {
        type: Sequelize.STRING
      },
      brojTelefona: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      adresa: {
        type: Sequelize.STRING
      },
      lojaliti_id:{
        type: Sequelize.INTEGER,
        references: {
          model: 'Lojalitis',
          key: 'id'
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
    await queryInterface.dropTable('Korisnicis');
  }
};