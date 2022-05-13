"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("revieweds", {
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
      title: {
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.STRING,
      },
      year: {
        type: Sequelize.STRING,
      },
      duration: {
        type: Sequelize.STRING,
      },
      genre: {
        type: Sequelize.STRING,
      },
      casting: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING(999),
      },
      rating: {
        type: Sequelize.STRING,
      },
      isReviewed: {
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
    await queryInterface.dropTable("revieweds");
  },
};
