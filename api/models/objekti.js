'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Objekti extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Lokacije, { foreignKey: "objekti_id", as: "lokacije" });
    }
  }
  Objekti.init({
    naziv: DataTypes.STRING,
    ocena: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Objekti',
  });
  return Objekti;
};