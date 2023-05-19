'use strict';
const moment = require('moment');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Characters',
      [
        {
          name: 'Mickey Mouse',
          age: 93,
          weight: 10,
          biography:
            'Mickey Mouse es un personaje icónico creado por Walt Disney y Ub Iwerks en 1928. Es un ratón antropomórfico con pantalones rojos, grandes zapatos amarillos y guantes blancos. Ha protagonizado numerosos cortometrajes, películas y programas de televisión, convirtiéndose en un símbolo reconocido a nivel mundial. Junto a sus amigos, como Minnie Mouse, Pluto, Goofy y Donald Duck, ha llevado alegría a millones de personas. Su carisma, personalidad amigable y espíritu optimista lo han convertido en un personaje querido por generaciones y su imagen es un emblema de The Walt Disney Company.',
          image:
            'https://static.wikia.nocookie.net/doblaje/images/3/3a/Mickey_mouse-1097.jpg/revision/latest?cb=20221018015338&path-prefix=es',
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          name: 'Minnie Mouse',
          age: 90,
          weight: 9,
          biography:
            'Minnie Mouse es un personaje de animación creado por Walt Disney y Ub Iwerks. Hizo su primera aparición en 1928 junto a Mickey Mouse en el cortometraje animado "Steamboat Willie". Minnie es una ratona antropomórfica de vestido rojo con lunares blancos, lazos en las orejas y guantes blancos. A lo largo de los años, ha sido la compañera y novia de Mickey en numerosos cortometrajes, películas y programas de televisión. Minnie es conocida por su encanto, su dulzura y su espíritu independiente. Ha dejado una huella duradera en la cultura popular y se ha convertido en un símbolo icónico de Disney, siendo adorada por niños y adultos por igual.',
          image:
            'https://static.wikia.nocookie.net/doblaje/images/8/86/Minnie_mouse.jpg/revision/latest/thumbnail/width/360/height/450?cb=20101221135000&path-prefix=es',
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          name: 'Pato donald',
          age: 80,
          weight: 11,
          biography:
            'Donald Duck, conocido como el Pato Donald, es un personaje icónico de Disney creado en 1934 por Walt Disney. Es un pato antropomórfico de plumaje blanco, pico y patas naranjas. A lo largo de los años, ha protagonizado numerosos cortometrajes, películas y cómics. Donald es conocido por su temperamento explosivo, su voz característica y su sombrero de marinero. Además de sus aventuras en solitario, también es un miembro querido de la pandilla de Disney, junto con Mickey Mouse y Goofy. Ha sido nominado y ha ganado varios premios a lo largo de su carrera. El Pato Donald ha dejado una huella imborrable en la cultura popular y continúa siendo uno de los personajes más queridos de Disney.',
          image:
            'https://static.wikia.nocookie.net/doblaje/images/7/7b/Donald.jpg/revision/latest?cb=20220512112816&path-prefix=es',
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          name: 'Pata Daisy',
          age: 83,
          weight: 8,
          biography:
            'Daisy Duck es un personaje de Disney creado en 1940. Es una pata antropomórfica con un plumaje blanco y una coqueta diadema con lazos en su cabeza. Daisy es conocida por ser la novia de Donald Duck y ha aparecido en numerosos cortometrajes, películas y cómics. Es elegante, enérgica y tiene una personalidad sofisticada. A lo largo de los años, ha sido una figura popular en la pandilla de Disney, junto con Mickey, Minnie y Goofy. Daisy también ha sido reconocida con varios premios y su imagen ha sido ampliamente utilizada en el merchandising de Disney. Su encanto y carisma la convierten en un personaje querido por fans de todas las edades.',
          image:
            'https://static.wikia.nocookie.net/doblaje/images/d/d4/Daisy.jpg/revision/latest?cb=20101221155547&path-prefix=es',
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          name: 'Alicia',
          age: 19,
          weight: 46,
          biography:
            'Alicia en el País de las Maravillas es un personaje protagonista de la famosa novela de Lewis Carroll, publicada en 1865. Alicia es una niña curiosa y aventurera que se sumerge en un mundo fantástico lleno de personajes peculiares y situaciones surrealistas. Su historia ha sido adaptada en numerosas películas, series y obras teatrales. Alicia es reconocida por su vestido azul y su lazo en el pelo, y su encuentro con el Conejo Blanco, el Sombrerero Loco y la Reina de Corazones se ha vuelto icónico. A través de su viaje en el País de las Maravillas, Alicia descubre lecciones sobre la imaginación, la lógica y la importancia de creer en lo imposible.',
          image:
            'https://static.wikia.nocookie.net/disney/images/1/11/Alicia.png/revision/latest?cb=20130906083737&path-prefix=es',
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          name: 'Aladdin',
          age: 18,
          weight: 50,
          biography:
            'Aladdin es el personaje principal de la película de animación de Disney "Aladdin". Es un joven callejero de corazón noble que vive en la ciudad de Agrabah. Con su ingenio y destreza, Aladdin se convierte en el poseedor de una lámpara mágica que alberga a un genio. Utilizando los deseos del genio, Aladdin busca ganarse el corazón de la princesa Jasmine mientras lucha contra el malvado Jafar. A lo largo de la historia, aprende lecciones sobre la importancia de ser uno mismo y el valor de la amistad verdadera. Aladdin se ha convertido en un querido personaje de Disney, conocido por su carisma, su astucia y su deseo de libertad',
          image:
            'https://static.wikia.nocookie.net/disney/images/8/85/Aladdin_%28personaje%29.png/revision/latest?cb=20160318010334&path-prefix=es',
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          name: 'Ariel',
          age: 16,
          weight: 45,
          biography:
            'Ariel es el personaje principal de la película de Disney "La Sirenita". Es una joven sirena curiosa y aventurera que anhela explorar el mundo humano. A pesar de las advertencias de su padre, el rey Tritón, Ariel hace un trato con Úrsula, una malvada bruja del mar, para obtener piernas y poder vivir en la superficie. Durante su tiempo como humana, se enamora del príncipe Eric y lucha por encontrar su verdadera identidad. Ariel es conocida por su hermosa melena pelirroja y su voz angelical. Su historia destaca el valor de luchar por los sueños y seguir el corazón. Ariel se ha convertido en uno de los personajes más queridos de Disney, simbolizando la valentía y la búsqueda de la propia identidad.',
          image:
            'https://static.wikia.nocookie.net/disney/images/a/a0/Ariel-1.png/revision/latest?cb=20170929163212&path-prefix=es',
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          name: 'Mufasa',
          age: 5,
          weight: 180,
          biography:
            'Mufasa es un personaje icónico de la película de Disney "El Rey León". Es el padre de Simba y el rey de la Tierra de los Leones. Mufasa es un león majestuoso y sabio, respetado por todos en su reino. Se preocupa profundamente por el bienestar de su familia y su territorio. A lo largo de la historia, Mufasa enseña a Simba lecciones valiosas sobre el liderazgo y la responsabilidad. Trágicamente, muere a manos de su malvado hermano Scar, pero su espíritu vive en el corazón de Simba y sigue siendo un símbolo de guía y sabiduría. Mufasa deja un legado duradero como un rey noble y amoroso.',
          image:
            'https://static.wikia.nocookie.net/doblaje/images/d/dd/MufasaTheLionKing02.png/revision/latest?cb=20190415004527&path-prefix=es',
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          name: 'Nala',
          age: 4,
          weight: 142,
          biography:
            'Nala es un personaje clave en la película de Disney "El Rey León". Es la amiga de la infancia y posteriormente la compañera de Simba. Nala es una leona valiente y decidida, que muestra una gran lealtad hacia su hogar y sus seres queridos. Juntos, Simba y Nala se aventuran en la búsqueda de su destino y luchan por recuperar el reino de su infancia. Nala es un personaje valiente y fuerte, que demuestra valentía y liderazgo en momentos cruciales. Su amor y apoyo a Simba son fundamentales en la historia, y su papel destaca la importancia de la amistad y el coraje.',
          image:
            'https://static.wikia.nocookie.net/disney/images/9/9e/Nala.png/revision/latest?cb=20121105121139&path-prefix=es',
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          name: 'Pinocho',
          age: 3,
          weight: 5,
          biography:
            'Pinocho es el entrañable protagonista de la película de Disney del mismo nombre. Originalmente un títere de madera creado por Geppetto, Pinocho adquiere vida gracias al hada azul y se embarca en una serie de aventuras. Con su nariz que crece al mentir y su deseo de convertirse en un niño real, Pinocho aprende valiosas lecciones sobre la honestidad y la responsabilidad. Su historia destaca la importancia de seguir el camino correcto y escuchar a la voz de la conciencia. Pinocho es un personaje querido y emblemático de Disney.',
          image:
            'https://scontent.fbog9-1.fna.fbcdn.net/v/t31.18172-8/22859831_122320481796388_4815763666272067591_o.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeGMnI54RyBIp9A0ucoxIwXnhTLTkIdyEk-FMtOQh3ISTxIpB2AfI9o_M2REtasO4TRoX9-5pYSqh2HlKwlacWIA&_nc_ohc=7SBUCFi8dcgAX-djdMR&_nc_ht=scontent.fbog9-1.fna&oh=00_AfDvgl3EWNhPjHxf9o5Bu1WZjqc9P789f6MkIznH-D-gmQ&oe=648DAFCE',
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          name: 'Pocahontas',
          age: 18,
          weight: 55,
          biography:
            'Pocahontas es la valiente y decidida protagonista de la película de Disney que lleva su nombre. Basada en una figura histórica, Pocahontas es una princesa indígena que se enfrenta a un choque de culturas cuando el explorador inglés John Smith llega a su tierra. Con su conexión espiritual con la naturaleza y su mensaje de paz, Pocahontas desafía los prejuicios y busca la armonía entre su pueblo y los colonizadores. Su historia es un recordatorio poderoso de la importancia de la tolerancia, la comprensión y la preservación del medio ambiente. Pocahontas se ha convertido en un ícono de empoderamiento y respeto intercultural.',
          image:
            'https://static.wikia.nocookie.net/disney/images/4/4b/Pocahontas01.jpg/revision/latest?cb=20181123170351&path-prefix=es',
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          name: 'Quasimodo',
          age: 20,
          weight: 62,
          biography:
            'Quasimodo es el conmovedor personaje principal de "El Jorobado de Notre Dame" de Disney. Como campanero de la catedral de Notre Dame, Quasimodo vive recluido debido a su apariencia física y escondido del mundo exterior. A pesar de su soledad, tiene un corazón amable y noble. Quasimodo anhela la aceptación y la libertad, y su valentía se pone a prueba cuando se enfrenta a la maldad del juez Frollo. Su historia destaca la importancia de la belleza interior, la compasión y la lucha por la justicia. Quasimodo se ha convertido en un símbolo de superación y bondad a pesar de las adversidades.',
          image:
            'https://static.wikia.nocookie.net/kingdomhearts/images/b/b5/Quasimodo_KH3D.png/revision/latest?cb=20120112040023&path-prefix=es',
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          name: 'Rapunzel',
          age: 18,
          weight: 45,
          biography:
            'Rapunzel es la encantadora protagonista de la película de Disney "Enredados". Con su cabello mágico y extremadamente largo, Rapunzel ha pasado gran parte de su vida encerrada en una torre por su malvada madre adoptiva, Gothel. Sin embargo, Rapunzel es valiente y curiosa, y cuando conoce a Flynn Rider, se aventura en el mundo exterior en busca de su verdadero destino. A lo largo de su viaje, descubre su fuerza interior y aprende el valor de la amistad y el amor verdadero. Rapunzel es un personaje inspirador que muestra el coraje de enfrentarse a los desafíos y seguir sus sueños.',
          image:
            'https://static.wikia.nocookie.net/wikia-crisgtcp/images/8/82/Rapunzel_pose.png/revision/latest?cb=20161029034709&path-prefix=es',
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          name: 'Rayo McQueen',
          age: 22,
          weight: 1200,
          biography:
            'Rayo McQueen es el intrépido protagonista de la película de Disney-Pixar "Cars". Es un coche de carreras veloz y ambicioso que se encuentra en la cima de su carrera. Sin embargo, su vida da un giro cuando se encuentra atrapado en el tranquilo pueblo de Radiator Springs. A través de su estadía, Rayo aprende lecciones valiosas sobre la humildad, la amistad y el verdadero significado de ganar. Con su carisma y determinación, Rayo se convierte en un ícono de la franquicia, recordándonos que el camino hacia el éxito no siempre es el más rápido, sino el más significativo.',
          image:
            'https://static.wikia.nocookie.net/el-mundo-de-cars/images/7/70/CotR_McQueen.png/revision/latest?cb=20230116025854&path-prefix=es',
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          name: 'Lilo',
          age: 5,
          weight: 20,
          biography:
            'Lilo es la adorable protagonista de la película de Disney "Lilo & Stitch". Es una niña hawaiana creativa y peculiar, que encuentra a un extraterrestre llamado Stitch y lo adopta como su mascota. A pesar de sus problemas familiares y su comportamiento excéntrico, Lilo demuestra un amor incondicional hacia Stitch y enseña valiosas lecciones sobre la importancia de la familia, la amistad y la aceptación. Su personalidad única y su conexión con la cultura hawaiana hacen de Lilo un personaje entrañable y memorable. A través de su historia, Lilo nos recuerda que incluso en medio de las dificultades, el amor y la bondad siempre prevalecen.',
          image:
            'https://static.wikia.nocookie.net/disney/images/2/29/LiloPelekai.png/revision/latest?cb=20130724165230&path-prefix=es',
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          name: 'Mike Wazowski',
          age: 17,
          weight: 40,
          biography:
            'Lilo es la adorable protagonista de la película de Disney "Lilo & Stitch". Es una niña hawaiana creativa y peculiar, que encuentra a un extraterrestre llamado Stitch y lo adopta como su mascota. A pesar de sus problemas familiares y su comportamiento excéntrico, Lilo demuestra un amor incondicional hacia Stitch y enseña valiosas lecciones sobre la importancia de la familia, la amistad y la aceptación. Su personalidad única y su conexión con la cultura hawaiana hacen de Lilo un personaje entrañable y memorable. A través de su historia, Lilo nos recuerda que incluso en medio de las dificultades, el amor y la bondad siempre prevalecen.',
          image:
            'https://static.wikia.nocookie.net/disney/images/3/38/Mike1.png/revision/latest?cb=20230314012719&path-prefix=es',
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          name: 'Tiana',
          age: 19,
          weight: 52,
          biography:
            'Lilo es la adorable protagonista de la película de Disney "Lilo & Stitch". Es una niña hawaiana creativa y peculiar, que encuentra a un extraterrestre llamado Stitch y lo adopta como su mascota. A pesar de sus problemas familiares y su comportamiento excéntrico, Lilo demuestra un amor incondicional hacia Stitch y enseña valiosas lecciones sobre la importancia de la familia, la amistad y la aceptación. Su personalidad única y su conexión con la cultura hawaiana hacen de Lilo un personaje entrañable y memorable. A través de su historia, Lilo nos recuerda que incluso en medio de las dificultades, el amor y la bondad siempre prevalecen.',
          image:
            'https://static.wikia.nocookie.net/doblaje/images/e/e3/Princess-tianapromotional_art.jpg/revision/latest?cb=20171007013744&path-prefix=es',
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          name: 'Wall-E',
          age: 700,
          weight: 270,
          biography:
            'Wall-E es el entrañable y solitario robot protagonista de la película de Pixar "Wall-E". En un mundo postapocalíptico lleno de basura, Wall-E tiene la tarea de limpiar la Tierra. A través de sus acciones y personalidad encantadora, Wall-E demuestra un sentido de curiosidad, ternura y amor. Su encuentro con el robot EVA desencadena una aventura que desafía las normas y busca salvar a la humanidad. Wall-E es un recordatorio conmovedor de la importancia de la conexión humana, la esperanza y la preservación del medio ambiente. A pesar de sus limitaciones tecnológicas, Wall-E tiene un impacto duradero en los corazones de quienes lo ven.',
          image:
            'https://static.wikia.nocookie.net/pixar/images/e/e3/Personaje_de_WALLE.png/revision/latest?cb=20160124151354&path-prefix=es',
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          name: 'Woody',
          age: 70,
          weight: 1,
          biography:
            'Wall-E es el entrañable y solitario robot protagonista de la película de Pixar "Wall-E". En un mundo postapocalíptico lleno de basura, Wall-E tiene la tarea de limpiar la Tierra. A través de sus acciones y personalidad encantadora, Wall-E demuestra un sentido de curiosidad, ternura y amor. Su encuentro con el robot EVA desencadena una aventura que desafía las normas y busca salvar a la humanidad. Wall-E es un recordatorio conmovedor de la importancia de la conexión humana, la esperanza y la preservación del medio ambiente. A pesar de sus limitaciones tecnológicas, Wall-E tiene un impacto duradero en los corazones de quienes lo ven.',
          image:
            'https://static.wikia.nocookie.net/doblaje/images/2/20/-Woody-.png/revision/latest?cb=20180322164820&path-prefix=es',
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          name: 'Úrsula',
          age: 56,
          weight: 80,
          biography:
            'Ursula es la malvada y astuta villana en la película de Disney "La Sirenita". Con su apariencia de pulpo gigante y su sed de poder, Ursula se convierte en una figura icónica del mal. Se presenta como una bruja del mar que ofrece pactos oscuros a cambio de las voces de las sirenas. Su manipulación y engaño llevan a Ariel, la protagonista, a tomar decisiones peligrosas. Ursula es una villana memorable que representa la ambición desmedida y la búsqueda de venganza. Su presencia en la historia resalta la importancia de la valentía y la perseverancia para superar los obstáculos.',
          image:
            'https://static.wikia.nocookie.net/disney/images/a/a4/Ursula.png/revision/latest?cb=20180924212517&path-prefix=es',
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          name: 'Boo',
          age: 3,
          weight: 14,
          biography:
            'Boo es la adorable niña de dos años en la película de Pixar "Monsters, Inc.". Aunque inicialmente asusta a los monstruos, Boo se convierte en un importante punto de inflexión para el protagonista, Sulley. Con su inocencia y cariño, Boo muestra a los monstruos el poder del amor y la amistad. A lo largo de la historia, se forma un vínculo especial entre Boo y Sulley, y su relación conmueve los corazones de los espectadores. Boo es un recordatorio de la importancia de la compasión y la conexión humana, incluso en un mundo lleno de monstruos.',
          image:
            'https://static.wikia.nocookie.net/disney/images/7/7c/Boo.png/revision/latest?cb=20131226173636&path-prefix=es',
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          name: 'Sebastián',
          age: 3,
          weight: 1,
          biography:
            'Sebastian es el colorido cangrejo en la película de Disney "La Sirenita". Como el asesor musical y leal compañero de Ariel, Sebastian aporta diversión y sabiduría a la historia. Con su acento caribeño y su amor por la música, se convierte en un personaje cómico y entrañable. A pesar de sus intentos por mantener a Ariel alejada de problemas, se ve arrastrado a emocionantes aventuras bajo el mar. Sebastian es un personaje memorable que aporta ritmo y alegría a la trama, destacando la importancia de seguir nuestros sueños y disfrutar de la música en la vida.',
          image:
            'https://static.wikia.nocookie.net/disneyypixar/images/7/7a/Sebastian_KH2.png/revision/latest?cb=20201229190627&path-prefix=es',
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          name: 'Pepe Grillo',
          age: 7,
          weight: 1,
          biography:
            'Pepe Grillo es el entrañable y sabio personaje de Disney en la película "Pinocho". Como la conciencia de madera de Pinocho, Pepe Grillo guía al protagonista a través de sus decisiones y dilemas morales. Con su estilo de vida despreocupado, Pepe Grillo enseña lecciones importantes sobre la responsabilidad y la honestidad. A través de su consejo y apoyo incondicional, Pepe Grillo se convierte en un amigo fiel y confiable para Pinocho. Su presencia en la historia resalta la importancia de escuchar nuestra conciencia y tomar decisiones basadas en la moralidad y el bienestar de los demás.',
          image:
            'https://static.wikia.nocookie.net/disney/images/b/bb/Jiminyumbrella.png/revision/latest?cb=20221116203317&path-prefix=es',
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
        {
          name: 'Peter Pan',
          age: 10,
          weight: 27,
          biography:
            'Peter Pan es el valiente y eternamente joven personaje de Disney en la película "Peter Pan". Con su espíritu aventurero y su capacidad para volar, Peter lleva a los niños a la mágica Tierra de Nunca Jamás. Es conocido por su resistencia a crecer y su determinación por vivir en un mundo de fantasía y juegos. Peter Pan es un líder carismático y un símbolo de la libertad y la imaginación. Su lucha contra el Capitán Garfio y su amistad con Campanita resaltan la importancia de la amistad y la valentía. Peter Pan nos enseña que nunca debemos dejar de creer en la magia y mantener viva nuestra niñez interior.',
          image:
            'https://static.wikia.nocookie.net/disney/images/8/82/PeterPan.png/revision/latest?cb=20121006101543&path-prefix=es',
          createdAt: moment().format('YYYY-MM-DD'),
          updatedAt: moment().format('YYYY-MM-DD'),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Characters', null, {});
  },
};
