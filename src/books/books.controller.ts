import { Controller, Req, Param, Query, Get } from '@nestjs/common';
import { BooksService } from './books.service'; 
import { Request } from 'express';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {} 

  // este metodo funciona con el endpoint http://localhost:3000/api/v1/books
  //@Get() 
  //findAll() { 
  //  return this.booksService.findAll(); 
  //}

  // este metodo funciona con el siguiente endpoints http://localhost:3000/api/v1/books/1
  //@Get(':bookId') 
  //findBook(@Param('bookId') bookId: string) { 
  //  console.log(" ************************* findBook ");
  //  return this.booksService.findBook(bookId); 
  //}

  // este metodo funciona con el siguiente endpoints http://localhost:3000/api/v1/books?order=1&limit=10
  @Get()
  findAll(@Req() request: Request) { 
    return this.booksService.findQueryAll(request.query); 
  }

}
