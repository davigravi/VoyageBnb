'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Bookings",
      [
        {
          userId: 1,
          listId: 2,
          startDate:new Date(2022, 2, 14),
          endDate: new Date(2022, 2, 20),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          listId: 3,
          startDate:new Date(2022, 3, 5),
          endDate: new Date(2022, 3, 7),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          listId: 1,
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
