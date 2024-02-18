'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('dodatneopcijes',
[
    {id:"1",naziv:"ExtraRoom"},
    {id:"2",naziv:"Spa"},
    {id:"3",naziv:"Sauna"},
    {id:"4",naziv:"VodeniKrever"},
    {id:"5",naziv:"Terasa"}
]);
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('DodatneOpcije', null, {});
     
  }
};
