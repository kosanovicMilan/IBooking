'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Ponudes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      destinacija: {
        type: Sequelize.STRING
      },
      lokacije_id:{
        type: Sequelize.INTEGER,
        references: {
          model: 'Lokacijes',
          key: 'id'
        }
      },
      
      kategorije_id:{
        type: Sequelize.INTEGER,
        references: {
          model: 'Kategorijes',
          key: 'id'
        }
      },
      datum:{
        type: Sequelize.STRING
      },
      brojDana: {
        type: Sequelize.INTEGER
       
    },
    brojOsoba: {
      type: Sequelize.INTEGER
    },
    cena: {
      type: Sequelize.INTEGER
      
    },
    dodatneOpcije_id:{
      type: Sequelize.INTEGER,
      references: {
        model: 'DodatneOpcijes',
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
    await queryInterface.dropTable('Ponudes');
  }
};