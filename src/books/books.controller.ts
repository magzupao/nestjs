import { Controller, Req, Body, Param, Query, Get, Post, Delete, Put } from '@nestjs/common';
import { BooksService } from './books.service'; 
import { Request } from 'express';
import { BookDto } from './book.dto';

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

  @Post() 
  createBook(@Body() newBook: BookDto) { 
    return this.booksService.createBook(newBook); 
  }

  @Delete(':bookId') 
  deleteBook(@Param('bookId') bookId: string) { 
    return this.booksService.deleteBook(bookId); 
  }

  @Put(':bookId') 
  updateBook(@Param('bookId') bookId: string, @Body() newBook: BookDto) { 
    return this.booksService.updateBook(bookId, newBook); 
  }
}
