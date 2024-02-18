'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('lojalitis',
[
    {id:"1",tip:"prviTip"},
    {id:"2",tip:"drugiTip"},
    {id:"3",tip:"treciTip"},
    {id:"4",tip:"cetvrtiTip"},
    {id:"5",tip:"petiTip"}
]);

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Lojaliti', null, {});
  }
};
