'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Korisnici extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Lojaliti, {foreignKey: "lojaliti_id", as: "lojaliti"});
      this.hasMany(models.Rezervacije, { foreignKey: "korisnici_id", as: "rezervacije" });

    }
  }
  Korisnici.init({
    ime: DataTypes.STRING,
    prezime: DataTypes.STRING,
    brojTelefona: DataTypes.STRING,
    email: DataTypes.STRING,
    adresa: DataTypes.STRING,
    lojaliti_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Korisnici',
  });
  return Korisnici;
};