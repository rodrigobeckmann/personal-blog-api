'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) =>
    await queryInterface.bulkInsert('Users', [{
      fullName: 'John Doe',
      email: 'john@email.com',
      password: '123456',
      isAdmin: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      fullName: 'Jane Doe',
      email: 'jane@email.com',
      password: '123456',
      isAdmin: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ], {}),

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
