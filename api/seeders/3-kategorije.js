'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('kategorijes',
[
    {id:"1",naziv:"Leto"},
    {id:"2",naziv:"Ski"},
    {id:"3",naziv:"Prolece"},
    {id:"4",naziv:"Planinarenje"},
    {id:"5",naziv:"Odmor"}
]);
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('Kategorije', null, {});
    
  }
};
