'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('korisnicis',
[
    {id:"1",ime:"Petar",prezime:"Peric",brojTelefona:"0642220398", email:"pera@pera.rs", adresa: "Milentije Popovica 10", lojaliti_id:1},
    {id:"2",ime:"Radomir",prezime:"Radic",brojTelefona:"0641230398", email:"rade@gmail.rs", adresa: "Vuka 11", lojaliti_id:3},
    {id:"3",ime:"Zoran",prezime:"Zokic",brojTelefona:"0645520398", email:"zoki@yahoo.rs", adresa: "Revolucije 22", lojaliti_id:5},
    {id:"4",ime:"Dragoljub",prezime:"Gagic",brojTelefona:"0623220398", email:"drago@gmail.rs", adresa: "Patrijarha Vrnave 9", lojaliti_id:2},
    {id:"5",ime:"Magdalena",prezime:"Jovic",brojTelefona:"0619220398", email:"magdajen@arhi.rs", adresa: "Slobode 8", lojaliti_id:4}
]);

  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('Korisnici', null, {});
     
  }
};
