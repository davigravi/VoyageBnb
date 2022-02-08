'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull:false,
      references:{model:"Users"},
    },
    listId: {
      type: DataTypes.INTEGER,
      allowNull:false,
      references:{model:"Listings"},
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {});
  Booking.associate = function(models) {
    Booking.belongsTo(models.User,{foreignKey:"userId"});
    Booking.belongsTo(models.Listing,{foreignKey:"listId"})
  };
  return Booking;
};
