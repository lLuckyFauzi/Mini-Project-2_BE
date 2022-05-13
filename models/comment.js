"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  comment.init(
    {
      userId: DataTypes.INTEGER,
      movieId: DataTypes.INTEGER,
      userName: DataTypes.STRING,
      profile: DataTypes.STRING,
      history: DataTypes.STRING,
      rate: DataTypes.STRING,
      title: DataTypes.STRING,
      text: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "comment",
    }
  );
  return comment;
};
