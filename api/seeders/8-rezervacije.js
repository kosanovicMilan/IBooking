'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('rezervacijes',
    [
      {id:"1",destinacija:"Mokra Gora",pocetak:"16.07.2024.",kraj:"24.07.2024",ponude_id:3,korisnici_id:4},
      {id:"2",destinacija:"Buljarice",pocetak:"20.08.2024.",kraj:"27.08.2024",ponude_id:2,korisnici_id:5},
      {id:"3",destinacija:"Oslo",pocetak:"05.06.2024.",kraj:"12.06.2024",ponude_id:1,korisnici_id:2},
      {id:"4",destinacija:"Stokholm",pocetak:"02.09.2024.",kraj:"05.09.2024",ponude_id:5,korisnici_id:3},
      {id:"5",destinacija:"Shaffhousen",pocetak:"10.10.2024.",kraj:"16.10.2024",ponude_id:4,korisnici_id:1}

      ]);
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('Rezervacije', null, {});
     
  }
};
