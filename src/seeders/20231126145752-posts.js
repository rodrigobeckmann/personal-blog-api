'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) =>
    await queryInterface.bulkInsert('Posts', [{
      title: 'Hello World john',
      content: 'Hello World john',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Hello World jane',
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
