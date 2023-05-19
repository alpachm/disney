# API Mundo de Disney

Esta es una aplicación backend desarrollada en Node.js con Express y Sequelize.

## Descripción

La aplicación backend proporciona una API para gestionar y acceder a datos relacionados con personajes de disney donde se muestran peliculas en donde han aparecido y el género de cada pelicula

## Características

- Despliega información acerca de los personajes y peliculas de Disney a un front-end
- Se pueden realizar un CRUD completo a los personajes y peliculas además de la relación entre pelicula-genero y pelicula-personaje
- Ya cuenta con seeders preestablecidos para poder utilizarla de una vez
- Cuenta con la configuración de los cors, por lo tanto puede ser consumida por el front-end
- Para inicializar el proyecto es necesario tener instalado Nodemon de forma global
- Todas las rutas estan protegidas, para usarlas es necesario registrar un usuario o estar logueado

## Tecnologías utilizadas

- Node.js
- Express
- Sequelize
- Sequelize-cli
- cors
- morgan
- bcrypt
- jsonwebtoken
- dotenv
- express-rate-limit
- helmet
- hpp
- moment
- mysql2
- xss-clean

## Requisitos de instalación

- Node.js
- npm
- Nodemon

## Instalación

1. Clona este repositorio: `git clone https://github.com/alpachm/disney.git`
2. Navega al directorio del proyecto: `cd disney-api`
3. Instala las dependencias: `npm install`

## Configuración

1. Crea un archivo `.env` en la raíz del proyecto y configura las variables de entorno necesarias. Puedes encontrar un ejemplo en el archivo `.env.template`.

## Uso

1. Inicia la aplicación: `npm run start:dev`
2. La aplicación estará disponible en: `http://localhost:port`

## API Endpoints

1. Auth routes

   - POST: http://localhost:3010/api/v1/auth/register
     Registra un nuevo usuarios

   - POST: http://localhost:3010/api/v1/auth/login
     Loguea un usuario existente

2. Characters routes

   - GET: http://localhost:3010/api/v1/characters
     Devuelve todos los personajes donde también muestra las peliculas donde aparecen

   - POST: http://localhost:3010/api/v1/characters
     Crea un nuevo personaje

   - GET: http://localhost:3010/api/v1/characters/1
     Consigue un persona en especifico a través de su ID

   - PATCH: http://localhost:3010/api/v1/characters/1
     Modifica un personaje en especifico a través de su ID

   - DELETE: http://localhost:3010/api/v1/characters/1
     Desabilita a un usuario en especifico a través de su ID. Se aplica un soft delete

3. Movies routes

   - POST: http://localhost:3010/api/v1/movies
     Crea una nueva pelicula

   - GET: http://localhost:3010/api/v1/movies
     Devuelva todas las peliculas

   - GET: http://localhost:3010/api/v1/movies/1
     Devuelve una pelicula en especifico usando su ID

   - PATCH http://localhost:3010/api/v1/movies/1
     Modifica una pelicula en especifico usando su ID

   - DELETE http://localhost:3010/api/v1/movies/1
     Desabilita una pelicula en especifico a través de su ID. Se aplica un soft delete

4. Genre routes:

   - POST: http://localhost:3010/api/v1/genres
     Crea un nuevo genero

   - GET: http://localhost:3010/api/v1/genres
     Devuelve todos los generos

   - PATCH: http://localhost:3010/api/v1/genres/1
     Modifica un genero en especifico usando su ID

   - DELTE: http://localhost:3010/api/v1/genres/1
     Desabilita un genero en especifico a través de su ID. Se aplica un soft delete

## NOTA:

    Las siguientes tablas con sus respectivas rutas fueron creadas para poder establecer las relaciones
        - movie-genre
        - character-movies

5. Character-movies routes

   - POST: http://localhost:3010/api/v1/character_movie
     Crea una nueva relación entre un personaje y una pelicula a través del ID de ambas tablas

   - GET: http://localhost:3010/api/v1/character_movie
     Despliega todas las relaciones

   - PATCH: http://localhost:3010/api/v1/character_movie/1
     Modifica una relación en especifico usando su ID

   - DELETE: http://localhost:3010/api/v1/character_movie/1
     Desabilita una relación en especifico a través de su ID. Se aplica un soft delete

6. Genre-movies routes

   - POST: http://localhost:3010/api/v1/genre_movie/
     Crea una nueva relación entre un genero y una pelicula a través del ID de ambas tablas

   - GET: http://localhost:3010/api/v1/genre_movie
     Despliega todas las relaciones

   - PATCH: http://localhost:3010/api/v1/genre_movie/1
     Modifica una relación en especifico usando su ID

   - DELETE: http://localhost:3010/api/v1/genre_movie/1
     Desabilita una relación en especifico a través de su ID. Se aplica un soft delete

## Contribución

¡Contribuciones son bienvenidas! Si encuentras algún problema o tienes alguna mejora, no dudes en comentarme

## Contacto

- Autor: Alex Pacheco
- Email: alexpacheco407@gmail.com
- Número de contacto: +57 3042542374
- LinkedIn: https://www.linkedin.com/in/alexjpachecom/
- GitHub: https://github.com/alpachm
