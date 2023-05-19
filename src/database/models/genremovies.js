'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class genreMovies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      genreMovies.belongsTo(models.Genre, { foreignKey: 'genre_id' });
      genreMovies.belongsTo(models.Movie, { foreignKey: 'movie_id' });
    }
  }
  genreMovies.init(
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      genre_id: {
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
      modelName: 'genreMovies',
    }
  );
  return genreMovies;
};
