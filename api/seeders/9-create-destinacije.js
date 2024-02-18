'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('destinacijes',
    [
      { id: "1", putanja: "Santorini.jpg", drzava: "Grčka", jezik: "Grčki", valuta: "Evro", restorani: "Taverna Selene" },
      { id: "2", putanja: "MachuPicchu.jpg", drzava: "Peru", jezik: "Španski", valuta: "Peruanski sol", restorani: "Indio Feliz" },
      { id: "3", putanja: "Tokyo.jpg", drzava: "Japan", jezik: "Japanski", valuta: "Japanski jen", restorani: "Sukiyabashi Jiro" },
      { id: "4", putanja: "Dubrovnik.jpg", drzava: "Hrvatska", jezik: "Hrvatski", valuta: "Hrvatska kuna", restorani: "Nautika Restaurant" },
      { id: "5", putanja: "Patagonia.jpg", drzava: "Argentina/Chile", jezik: "Španski", valuta: "Argentinski pezos / Čileanski pezos", restorani: "Baco Vino y Bistro" },
      { id: "6", putanja: "Petra.jpg", drzava: "Jordan", jezik: "Arapski", valuta: "Jordanian dinar", restorani: "Al-Wadi Restaurant" },
      { id: "7", putanja: "Reykjavik.jpg", drzava: "Island", jezik: "Islandski", valuta: "Islandski kruna", restorani: "Dill Restaurant" },
      { id: "8", putanja: "Banff.jpg", drzava: "Kanada", jezik: "Engleski, Francuski", valuta: "Kanadski dolar", restorani: "The Bison Restaurant" },
      { id: "9", putanja: "Bali.jpg", drzava: "Indonezija", jezik: "Indonezijski", valuta: "Indonezijska rupija", restorani: "Locavore" },
      { id: "10", putanja: "Amalfi.jpg", drzava: "Italija", jezik: "Italijanski", valuta: "Evro", restorani: "La Caravella" },
      { id: "11", putanja: "Serengeti.jpg", drzava: "Tanzanija", jezik: "Svahili, Engleski", valuta: "Tanzanijski šiling", restorani: "Safari Restaurant" },
      { id: "12", putanja: "Queenstown.jpg", drzava: "Novi Zeland", jezik: "Engleski, Maorski", valuta: "Novozelandski dolar", restorani: "Rata Dining" },
      { id: "13", putanja: "Marrakech.jpg", drzava: "Maroko", jezik: "Arapski, Berberski", valuta: "Marokanski dirham", restorani: "Le Foundouk" },
      { id: "14", putanja: "Florence.jpg", drzava: "Italija", jezik: "Italijanski", valuta: "Evro", restorani: "La Giostra" },
      { id: "15", putanja: "Yosemite.jpg", drzava: "SAD", jezik: "Engleski", valuta: "Američki dolar", restorani: "The Majestic Yosemite Hotel Dining Room" },
      { id: "16", putanja: "BoraBora.jpg", drzava: "Francuska Polinezija", jezik: "Francuski, Tahitski", valuta: "Francuski pacifički franak", restorani: "St. James" },
      { id: "17", putanja: "Cape.jpg", drzava: "Južnoafrička Republika", jezik: "Afrikaans, Engleski, Xhosa", valuta: "Južnoafrički rand", restorani: "The Test Kitchen" },
      { id: "18", putanja: "Kyoto.jpg", drzava: "Japan", jezik: "Japanski", valuta: "Japanski jen", restorani: "Kikunoi" },
      { id: "19", putanja: "Edinburgh.jpg", drzava: "Škotska", jezik: "Engleski, Škotski galski", valuta: "Britanska funta", restorani: "The Witchery by the Castle" },
      { id: "20", putanja: "GreatBarrier.jpg", drzava: "Australija", jezik: "Engleski", valuta: "Australijski dolar", restorani: "Nautilus Restaurant" }
  ]
  
  
  
  );
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('Destinacije', null, {});
     
  }
};
