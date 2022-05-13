"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("comments", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
      },
      movieId: {
        type: Sequelize.INTEGER,
      },
      userName: {
        type: Sequelize.STRING,
      },
      profile: {
        type: Sequelize.STRING,
      },
      history: {
        type: Sequelize.STRING,
      },
      rate: {
        type: Sequelize.STRING,
      },
      title: {
        type: Sequelize.STRING,
      },
      text: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("comments");
  },
};
