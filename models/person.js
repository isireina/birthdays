"use strict";
var f= new Date();

module.exports = (sequelize, DataTypes) => {
  var Person = sequelize.define(
    "Person",
    {
      name: DataTypes.STRING,
      birth_date: DataTypes.DATEONLY
    },
    {
      classMethods: {
        associate: function(models) {
          // associations can be defined here
          _.sortBy(models, function(m) { 
            return m.toDate().getTime();
          }
        }
      }
    }
  );

  Person.prototype.fechas = function() {
    return this.getDataValue("fechas");
  };
  return Person;
};
