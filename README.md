<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm i -g @nestjs/cli
$ nest new tutorial-nest-js
$ cd tutorial-nest-js
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

Se crea el proyecto con los siguientes recursos:
```
/home/vagrant/nestjs/tutorial-nest-js/src/main.ts
/home/vagrant/nestjs/tutorial-nest-js/src/app.service.ts
/home/vagrant/nestjs/tutorial-nest-js/src/app.module.ts
/home/vagrant/nestjs/tutorial-nest-js/src/app.controller.ts
/home/vagrant/nestjs/tutorial-nest-js/src/app.controller.spec.ts
```

El archivo main.ts contiene:
```
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
```

El archivo controller.ts
```
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
```

El archivo service.ts
```
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
```

El archivo module.ts
 ```
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

Configuramos el path api/v1

Invocamos la url localhost:3000

Modificamos el path configurando /api/v1
```
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');                    // prefijo global
  await app.listen(3000);
}
bootstrap();
```

Creamos nuevo controlador y servicio llamado Books
```
nest g service books
nest g controller books
```

Al crear los recursos se actualizar el archivo module.ts
```
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksService } from './books/books.service';
import { BooksController } from './books/books.controller';

@Module({
  imports: [],
  controllers: [AppController, BooksController],
  providers: [AppService, BooksService],
})
export class AppModule {}
```

Complementamos el BooksController de inicio el archivo contiene:
```
import { Controller } from '@nestjs/common';

@Controller('books')
export class BooksController {}
```

Modificamos el controlador:
```
import { Controller, Get } from '@nestjs/common';
import { BooksService } from './books.service'; 

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {} 

  @Get() 
  findAll() { 
    return this.booksService.findAll(); 
  }
}
```

Probamos el controlador curl localhost:3000/api/v1/books

Creamos los endpoints (scaffolfding)

Table 1. Endpoints
Método	Endpoint				        Descripción
GET		  /api/v1/books			      Obtener lista de libros

GET		  /api/v1/books/{bookId}	Devuelve información sobre un libro específico

POST	  /api/v1/books			      Crear un libro

DELETE	/api/v1/books/{bookId}	Eliminar un libro específico

PUT		  /api/v1/books/{bookId}	Modificar un libro específico


Creamos el servicio

GET		/api/v1/books/{bookId}

Agremos este metodo al service
```
  findBook(bookId: string) {
    return `findBook funcionando con bookId: ${bookId}`;
  }
```

Agregamos este metodo al controlador
```
  @Get(':bookId') 
  findBook(@Param('bookId') bookId: string) { 
    return this.booksService.findBook(bookId); 
  }
```

http://localhost:3000/api/v1/books?sort=1


Probamos la creacion de un objeto Book sin perssitir solo validamos que enviamos datos
y regresamos el objeto creado:

Post - localhost:3000/api/v1/books
```
{
    "title": "El enigma de la habitación 622",
    "genre": "Ficción contemporánea",
    "description": "Vuelve el «principito de la literatura negra contemporánea, el niño mimado de la industria literaria» (GQ): el nuevo thriller de Joël Dicker es su novela más personal. ",
    "author": "Joël Dicker",
    "publisher": "Alfaguara",
    "pages": 624,
    "image_url": "https://images-na.ssl-images-amazon.com/images/I/41KiZbwOhhL._SX315_BO1,204,203,200_.jpg"
}
```


