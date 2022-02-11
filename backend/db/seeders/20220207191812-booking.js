'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Bookings",
      [
        {
          userId: 1,
          listId: 2,
          name: "3B/3B Downtown Dallas. Great Location" ,
          address:"21165 Snow Hill Lane",
          city: "Dallas",
          state: "Texas",
          zipcode: "75001",
          pricePerNight: 185,
          url: "https://i.ibb.co/xmHL9bL/gallery-inspired-ny-apartment-with-artistic-and-fun-flair-3.jpg",
          startDate:new Date(2022, 2, 14),
          endDate: new Date(2022, 2, 20),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          listId: 3,
          name: "The Tiny Green House" ,
          address:"56953 Space City Street",
          city: "Los Angeles",
          state: "California",
          zipcode: "90001",
          pricePerNight: 185,
          url: "https://i.ibb.co/LpfnSv6/Florham-Park.jpg",
          startDate:new Date(2022, 3, 5),
          endDate: new Date(2022, 3, 7),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          listId: 1,
          name: "Luxury 1 bedroom. Near Downtown!" ,
          address:"17866 Pecan Drive Houston",
          city: "Houston",
          state: "Texas",
          zipcode: "77094",
          pricePerNight: 100,
          url: "https://i.ibb.co/XxwdRYN/images.jpg",
          startDate:new Date(2022, 3, 15),
          endDate: new Date(2022, 3, 22),
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

   return queryInterface.bulkDelete('Bookings', null, {});
  }
};
