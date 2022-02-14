'use strict';

// const { DataTypes } = require("sequelize");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Listings",
      [
        {
          userId: 1,
          name: "Luxury 1 bedroom. Near Downtown!" ,
          address:"17866 Pecan Drive Houston",
          city: "Houston",
          state: "Texas",
          zipcode: "77094",
          description: "This place is located 5 minutes away from Downtown. 1 bedroom but can sleep 2 guests. Free parking and wifi. There are many restaurants with city views nearby.",
          pricePerNight: 100,
          url: "https://i.ibb.co/XxwdRYN/images.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          name: "3B/3B Downtown Dallas. Great Location" ,
          address:"21165 Snow Hill Lane",
          city: "Dallas",
          state: "Texas",
          zipcode: "75001",
          description: "This 3 bed, 3 bath is located in downtown Dallas. Dog friendly with free parking and wifi. Big backyard with pool for activities.",
          pricePerNight: 185,
          url: "https://i.ibb.co/xmHL9bL/gallery-inspired-ny-apartment-with-artistic-and-fun-flair-3.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          name: "The Tiny Green House" ,
          address:"56953 Space City Street",
          city: "Los Angeles",
          state: "California",
          zipcode: "90001",
          description:"The tiny green house sleeps up to 4 guests. Although descriped as tiny, this space is very relaxing and cozy. Just outside of the city, it is secluded from the everyday noises of Los Angeles and is the perfect getaway.",
          pricePerNight: 185,
          url: "https://i.ibb.co/LpfnSv6/Florham-Park.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          name: "Newly Built Condo by the Galleria" ,
          address:"23458 Nashville Street",
          city: "San Antonio",
          state: "Texas",
          zipcode: "77123",
          description: "This place comes with a huge outdoor patio and swimming pool, a movie theatre, and aracde room. Very spacious and is located close to restaurants.",
          pricePerNight: 260,
          url: "https://i.ibb.co/YyRp2HQ/house-5.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {

   return queryInterface.bulkDelete('Listings', null, {});
  }
};
