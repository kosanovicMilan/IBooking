'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lojaliti extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Korisnici, { foreignKey: "lojaliti_id", as: "korisnici" });

    }
    
  }
  Lojaliti.init({
    tip: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Lojaliti',
  });
  return Lojaliti;
};