'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      content: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'Users',
          key:'id'
        },
        onDelete:'CASCADE',
        onUpdate:'CASCADE',
      },
      postId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'Posts',
          key:'id'
        },
        onDelete:'CASCADE',
        onUpdate:'CASCADE',
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Comments');
  }
};