'use strict';
const moment = require('moment');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'CharacterMovies',
      [
        {
          character_id: 7,
          movie_id: 1,
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          character_id: 20,
          movie_id: 1,
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          character_id: 22,
          movie_id: 1,
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          character_id: 1,
          movie_id: 2,
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          character_id: 1,
          movie_id: 3,
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          character_id: 2,
          movie_id: 3,
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          character_id: 3,
          movie_id: 3,
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          character_id: 20,
          movie_id: 3,
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          character_id: 1,
          movie_id: 4,
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          character_id: 3,
          movie_id: 4,
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          character_id: 3,
          movie_id: 5,
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          character_id: 4,
          movie_id: 5,
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          character_id: 5,
          movie_id: 6,
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          character_id: 6,
          movie_id: 7,
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          character_id: 8,
          movie_id: 8,
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          character_id: 9,
          movie_id: 8,
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          character_id: 10,
          movie_id: 9,
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          character_id: 23,
          movie_id: 9,
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          character_id: 11,
          movie_id: 10,
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          character_id: 12,
          movie_id: 11,
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          character_id: 13,
          movie_id: 12,
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          character_id: 14,
          movie_id: 13,
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          character_id: 15,
          movie_id: 14,
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          character_id: 16,
          movie_id: 15,
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          character_id: 21,
          movie_id: 15,
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          character_id: 17,
          movie_id: 16,
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          character_id: 18,
          movie_id: 17,
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          character_id: 19,
          movie_id: 18,
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          character_id: 24,
          movie_id: 19,
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('CharacterMovies', null, {});
  },
};
