'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ponude extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Kategorije, {foreignKey: "kategorije_id", as: "kategorija"});
      this.belongsTo(models.Lokacije, {foreignKey: "lokacije_id", as: "lokacije"});
      this.belongsTo(models.DodatneOpcije, {foreignKey: "dodatneOpcije_id", as: "dodatneOpcije"});
      this.hasMany(models.Rezervacije, { foreignKey: "ponude_id", as: "rezervacije" });

    }
  }
  Ponude.init({
    destinacija: {
      type: DataTypes.STRING(120),
      unique: true,
      allowNull: false
  }, 
  lokacije_id: {
    type: DataTypes.INTEGER,
    allowNull: true
}, 
  kategorije_id: {
      type: DataTypes.INTEGER,
      allowNull: true
  }, 
  dodatneOpcije_id: {
    type: DataTypes.INTEGER,
    allowNull: true
}, 
  datum: {
      type: DataTypes.STRING,
      allowNull: false
  }, 
  brojDana: {
      type: DataTypes.INTEGER,
      allowNull: false
  },
  brojOsoba: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  cena: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
  
  }, {
    sequelize,
    modelName: 'Ponude',
  });
  return Ponude;
};