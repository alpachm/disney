'use strict';
const moment = require('moment');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Movies',
      [
        {
          image:
            'https://static.wikia.nocookie.net/doblaje/images/5/51/La_Sirenita_3.jpg/revision/latest?cb=20091105154931&path-prefix=es',
          title: 'La sirenita: los comienzos de Ariel',
          creationDate: '1940-11-13',
          score: 4,
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          image:
            'https://diariodefriki.files.wordpress.com/2018/07/fantasia-52350194e28c5.jpg?w=210&h=300',
          title: 'Fantasía',
          creationDate: '2008-08-25',
          score: 5,
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          image:
            'https://upload.wikimedia.org/wikipedia/en/e/ee/Mickey%27s_House_of_Villains.jpg',
          title: `Mickey's House of Villains`,
          creationDate: '2002-09-3',
          score: 3,
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          image:
            'https://static.wikia.nocookie.net/doblaje/images/4/45/2945-los_tres_mosqueteros_mickey%2C_donald%2C_goofy_2004.jpg/revision/latest?cb=20100108200409&path-prefix=es',
          title: `Mickey, Donald, Goofy: Los tres mosqueteros`,
          creationDate: '2004-08-17',
          score: 3,
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          image:
            'https://upload.wikimedia.org/wikipedia/en/a/a6/Mr._Duck_Steps_Out.png',
          title: `Mr. Duck Steps Out`,
          creationDate: '1940-06-07',
          score: 4,
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          image:
            'https://es.web.img3.acsta.net/c_310_420/pictures/14/02/27/19/01/345052.jpg',
          title: `Alicia en el país de las maravillas`,
          creationDate: '1951-07-26',
          score: 4,
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          image:
            'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2016/12/aladdin.jpg?itok=4qtuDDNB',
          title: `Aladdín`,
          creationDate: '1992-11-25',
          score: 4,
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          image:
            'https://es.web.img3.acsta.net/medias/nmedia/18/68/20/31/19785394.jpg?coixp=47&coiyp=41',
          title: `El rey león`,
          creationDate: '1994-06-30',
          score: 5,
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          image: 'https://www.ecartelera.com/carteles/5800/5886/001_m.jpg',
          title: `Pinocho`,
          creationDate: '1940-02-23',
          score: 5,
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          image: 'https://pics.filmaffinity.com/Pocahontas-337434161-large.jpg',
          title: `Pocahontas`,
          creationDate: '1995-06-23',
          score: 5,
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          image:
            'https://www.aceprensa.com/wp-content/uploads/1996/11/10545-0.jpg',
          title: `El jorobado de Notre Dame`,
          creationDate: '1996-06-21',
          score: 3,
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          image:
            'https://m.media-amazon.com/images/M/MV5BMTAxNDYxMjg0MjNeQTJeQWpwZ15BbWU3MDcyNTk2OTM@._V1_FMjpg_UX1000_.jpg',
          title: `Enredados`,
          creationDate: '2011-01-07',
          score: 3,
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          image:
            'https://es.web.img2.acsta.net/pictures/14/05/28/11/24/435900.jpg',
          title: `Cars`,
          creationDate: '2006-06-22',
          score: 3,
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          image:
            'https://es.web.img3.acsta.net/pictures/14/03/27/11/39/176864.jpg',
          title: `Lilo y Stitch`,
          creationDate: '2002-06-21',
          score: 3,
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          image:
            'https://lumiere-a.akamaihd.net/v1/images/p_monstersinc_19751_55afa07a.jpeg',
          title: `Monsters, Inc`,
          creationDate: '2001-12-21',
          score: 4,
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          image:
            'https://mx.web.img3.acsta.net/pictures/20/04/22/08/36/0694727.jpg',
          title: `La princesa y el sapo`,
          creationDate: '2009-12-25',
          score: 4,
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          image: 'https://pics.filmaffinity.com/WALL_AaE-973488527-large.jpg',
          title: `WALL·E`,
          creationDate: '2008-06-27',
          score: 4,
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          image: 'https://pics.filmaffinity.com/Toy_Story-626273371-large.jpg',
          title: `Toy Story`,
          creationDate: '1995-12-25',
          score: 5,
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          image: 'https://pics.filmaffinity.com/Toy_Story-626273371-large.jpg',
          title: `Peter Pan`,
          creationDate: '1953-02-05',
          score: 4,
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Movies', null, {});
  },
};
