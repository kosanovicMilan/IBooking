'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Partneri extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Partneri.init({
    putanja: DataTypes.STRING,
    naziv: DataTypes.STRING,
    adresa: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Partneri',
  });
  return Partneri;
};