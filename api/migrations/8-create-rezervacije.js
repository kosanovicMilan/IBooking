'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Rezervacijes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      destinacija: {
        type: Sequelize.STRING
      },
      pocetak:{
        type: Sequelize.STRING
      },
      kraj: {
        type: Sequelize.STRING
      },
      ponude_id:{
        type: Sequelize.INTEGER,
        references: {
          model: 'Ponudes',
          key: 'id'
        }
      },
      korisnici_id:{
        type: Sequelize.INTEGER,
        references: {
          model: 'Korisnicis',
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
    await queryInterface.dropTable('Rezervacijes');
  }
};