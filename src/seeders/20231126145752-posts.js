'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) =>
    await queryInterface.bulkInsert('Posts', [{
      content: 'Hello World jhon',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      content: 'Hello World jane',
      userId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {}),

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Posts', null, {});
  }
};
