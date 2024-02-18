'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rezervacije extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Ponude, {foreignKey: "ponude_id", as: "ponude"});
      this.belongsTo(models.Korisnici, {foreignKey: "korisnici_id", as: "korisnici"});
    }
  }
  Rezervacije.init({
    destinacija: {
      type: DataTypes.STRING(120),
      unique: true,
      allowNull: false
  },
  pocetak:{
    type: DataTypes.STRING,
    allowNull: false
  },
  kraj:{
    type: DataTypes.STRING,
    allowNull: false
  },
  ponude_id: DataTypes.INTEGER,
  korisnici_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Rezervacije',
  });
  return Rezervacije;
};