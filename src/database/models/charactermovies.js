'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CharacterMovies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      CharacterMovies.belongsTo(models.Character, {
        foreignKey: 'character_id',
      });
      CharacterMovies.belongsTo(models.Movie, { foreignKey: 'movie_id' });
    }
  }
  CharacterMovies.init(
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      character_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      movie_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'CharacterMovies',
    }
  );
  return CharacterMovies;
};
