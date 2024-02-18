'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('partneris',
    [
      { id: "1", putanja: "Grace.jpg", naziv: "Grace Hotel Santorini", adresa: "Imerovigli, Santorini, Grčka" },
      { id: "2", putanja: "Belmond.jpg", naziv: "Belmond Sanctuary Lodge", adresa: "Machu Picchu, Peru" },
      { id: "3", putanja: "ParkHyatt.jpg", naziv: "Park Hyatt Tokyo", adresa: "Tokyo, Japan" },
      { id: "4", putanja: "Palace.jpg", naziv: "Dubrovnik Palace Hotel", adresa: "Dubrovnik, Hrvatska" },
      { id: "5", putanja: "Singular.jpg", naziv: "The Singular Patagonia", adresa: "Puerto Bories, Patagonia, Čile" },
      { id: "6", putanja: "Petra.jpg", naziv: "Petra Marriott Hotel", adresa: "Petra, Jordan" },
      { id: "7", putanja: "Ion.jpg", naziv: "Ion Adventure Hotel", adresa: "Selfoss, Island" },
      { id: "8", putanja: "Fairmont.jpg", naziv: "Fairmont Banff Springs Hotel", adresa: "Banff, Alberta, Kanada" },
      { id: "9", putanja: "Hanging.jpg", naziv: "Hanging Gardens of Bali", adresa: "Payangan, Bali, Indonezija" },
      { id: "10", putanja: "Santa.jpg", naziv: "Hotel Santa Caterina", adresa: "Amalfi, Italija" },
      { id: "11", putanja: "FourFlorence.jpg", naziv: "Four Seasons Safari Lodge Serengeti", adresa: "Serengeti National Park, Tanzanija" },
      { id: "12", putanja: "Hilton.jpg", naziv: "Hilton Queenstown Resort & Spa", adresa: "Queenstown, Novi Zeland" },
      { id: "13", putanja: "La.jpg", naziv: "La Mamounia", adresa: "Marrakech, Maroko" },
      { id: "14", putanja: "Four.jpg", naziv: "Four Seasons Hotel Firenze", adresa: "Florence, Italija" },
      { id: "15", putanja: "TheBalmoral.jpg", naziv: "The Ahwahnee", adresa: "Yosemite National Park, SAD" },
      { id: "16", putanja: "BoraBora.jpg", naziv: "Four Seasons Resort Bora Bora", adresa: "Bora Bora, Francuska Polinezija" },
      { id: "17", putanja: "One.jpg", naziv: "One&Only Cape Town", adresa: "Cape Town, Južnoafrička Republika" },
      { id: "18", putanja: "Hyatt.jpg", naziv: "Hyatt Regency Kyoto", adresa: "Kyoto, Japan" },
      { id: "19", putanja: "TheAhwahnee.jpg", naziv: "The Balmoral Hotel", adresa: "Edinburgh, Škotska" },
      { id: "20", putanja: "Qualia.jpg", naziv: "Qualia", adresa: "Hamilton Island, Australija" }
  ]
  );
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('Partneri', null, {});
     
  }
};
