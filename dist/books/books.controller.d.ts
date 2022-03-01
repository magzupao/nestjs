import { BooksService } from './books.service';
import { Request } from 'express';
import { BookDto } from './book.dto';
export declare class BooksController {
    private booksService;
    constructor(booksService: BooksService);
    findAll(request: Request): any;
    createBook(newBook: BookDto): BookDto;
    deleteBook(bookId: string): string;
    updateBook(bookId: string, newBook: BookDto): BookDto;
}
