'use strict';
const moment = require('moment');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Genres',
      [
        {
          name: 'Fantasía',
          image:
            'https://as01.epimg.net/meristation/imagenes/2021/12/13/reportajes/1639394425_939772_1639394831_noticia_normal.jpg',
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          name: 'Infantil',
          image:
            'https://disenograficocucuta.com/wp-content/uploads/2021/07/fn-portafolio-ilustracion-diseno-grafico-udes-cucuta.jpg',
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          name: 'Musical',
          image:
            'https://img.freepik.com/vector-gratis/ilustracion-dia-mundial-rock-dibujada-mano-persona-tocando-guitarra-concierto_23-2149453720.jpg?w=2000',
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          name: 'Animación',
          image:
            'https://img.freepik.com/vector-gratis/ilustracion-dia-mundial-rock-dibujada-mano-persona-tocando-guitarra-concierto_23-2149453720.jpg?w=2000',
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          name: 'Novela',
          image:
            'https://thumbs.dreamstime.com/b/m%C3%A1scaras-del-teatro-de-la-comedia-y-de-la-tragedia-21958013.jpg',
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          name: 'Romantico',
          image:
            'https://previews.123rf.com/images/julianka/julianka1610/julianka161000002/66590482-silueta-rom%C3%A1ntica-de-los-amantes-de-la-pareja-de-estrellas-ilustraci%C3%B3n-vectorial.jpg',
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          name: 'Aventura',
          image:
            'https://img.freepik.com/vector-premium/ilustracion-aventura-al-aire-libre-excursionista-montana_104785-1413.jpg',
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          name: 'Drama',
          image:
            'https://images.vexels.com/content/169937/preview/drama-subject-illustration-21a0f6.png',
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          name: 'Comedia',
          image:
            'https://thumbs.dreamstime.com/b/m%C3%A1scaras-del-theatrical-de-la-comedia-y-de-la-tragedia-ilustraci%C3%B3n-del-vector-94735290.jpg',
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Genre', null, {});
  },
};
