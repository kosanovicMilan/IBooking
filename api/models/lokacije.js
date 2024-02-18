'use strict';
const {
  Model, STRING
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lokacije extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Objekti, {foreignKey: "objekti_id", as: "objekti"});
      this.hasMany(models.Ponude, { foreignKey: "lokacije_id", as: "ponude" });

    }
  }
  Lokacije.init({
    naziv: DataTypes.STRING,
    drzava: DataTypes.STRING,
    grad: DataTypes.STRING,
    objekti_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Lokacije',
  });
  return Lokacije;
};