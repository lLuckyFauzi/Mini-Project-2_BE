"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class reviewed extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  reviewed.init(
    {
      userId: DataTypes.INTEGER,
      movieId: DataTypes.INTEGER,
      title: DataTypes.STRING,
      image: DataTypes.STRING,
      year: DataTypes.STRING,
      duration: DataTypes.STRING,
      genre: DataTypes.STRING,
      casting: DataTypes.STRING,
      description: DataTypes.STRING(999),
      rating: DataTypes.STRING,
      isReviewed: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "reviewed",
    }
  );
  return reviewed;
};
