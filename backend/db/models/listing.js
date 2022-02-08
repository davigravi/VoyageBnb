'use strict';

const { Validator } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Listing = sequelize.define('Listing', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull:false,
      references:{model:"Users"},
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 150]
      }
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },
    zipcode: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 5]
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pricePerNight: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {});
  Listing.associate = function(models) {
    Listing.belongsTo(models.User,{foreignKey:"userId"});
    Listing.hasMany(models.Booking,{foreignKey:"listId"});
  };
  return Listing;
};
