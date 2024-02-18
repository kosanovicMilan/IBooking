'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ponudes',
[
    {id:"1",destinacija:"Mallorca",lokacije_id:1,kategorije_id:1,datum:"12.12.2000.",brojDana:"10",brojOsoba:"2",cena:1200,dodatneOpcije_id:1},
    { id: "2", destinacija: "Ibiza", lokacije_id: 2, kategorije_id: 2, datum: "15.07.2024.", brojDana: "7", brojOsoba: "4", cena: 1800,dodatneOpcije_id:2 },
    { id: "3", destinacija: "Kairo", lokacije_id: 3, kategorije_id: 3, datum: "03.09.2024.", brojDana: "14", brojOsoba: "2", cena: 2500 ,dodatneOpcije_id:4},
    { id: "4", destinacija: "Tunis", lokacije_id: 4, kategorije_id: 4, datum: "22.05.2024.", brojDana: "3", brojOsoba: "1", cena: 500,dodatneOpcije_id:5 },
    { id: "5", destinacija: "Sutomore", lokacije_id: 5, kategorije_id: 5, datum: "08.10.2024.", brojDana: "5", brojOsoba: "3", cena: 800 ,dodatneOpcije_id:3}

  ]);
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Ponude', null, {});
     
  }
};
