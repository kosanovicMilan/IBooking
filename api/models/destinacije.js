'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Destinacije extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Destinacije.init({
    putanja: DataTypes.STRING,
    drzava: DataTypes.STRING,
    jezik: DataTypes.STRING,
    valuta: DataTypes.STRING,
    restorani: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Destinacije',
  });
  return Destinacije;
};