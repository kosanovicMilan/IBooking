'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('objektis',
[
    {id:"1",naziv:"Continental",ocena:"5"},
    {id:"2",naziv:"X9",ocena:"3"},
    {id:"3",naziv:"GocaHostel",ocena:"2"},
    {id:"4",naziv:"Square10",ocena:"2"},
    {id:"5",naziv:"BokiApartmaniLUX",ocena:"1"}
]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
