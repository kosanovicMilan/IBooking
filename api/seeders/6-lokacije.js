'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('lokacijes',
[
    {id:"1",naziv:"1nesto1",drzava:"Spanija",grad:"Ibiza",objekti_id:1},
    {id:"2",naziv:"2nesto2",drzava:"Srbija",grad:"Beograd",objekti_id:4},
    {id:"3",naziv:"3nesto3",drzava:"Nemacka",grad:"Minhen",objekti_id:5},
    {id:"4",naziv:"4nesto4",drzava:"Norveska",grad:"Oslo",objekti_id:2},
    {id:"5",naziv:"5nesto5",drzava:"Estonija",grad:"Adisabeba",objekti_id:3},
  ]);
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('Lokacije', null, {});
     
  }
};
