'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DodatneOpcije extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Ponude, { foreignKey: "dodatneOpcije_id", as: "ponude" });
    }
  }
  DodatneOpcije.init({
    naziv: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DodatneOpcije',
  });
  return DodatneOpcije;
};