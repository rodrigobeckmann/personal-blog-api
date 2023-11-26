'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) =>
    await queryInterface.bulkInsert('Comments', [{
      content: 'Primeiro comentário',
      userId: 2,
      postId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      content: 'Segundo comentário',
      userId: 2,
      postId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      content: 'Terceiro comentário',
      userId: 1,
      postId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ], {}),

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Comments', null, {});
  }
};

