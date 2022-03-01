import { BooksService } from './books.service';
import { Request } from 'express';
export declare class BooksController {
    private booksService;
    constructor(booksService: BooksService);
    findAll(request: Request): any;
    createBook(body: any): any;
}
