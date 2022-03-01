import { BookDto } from './book.dto';
export declare class BooksService {
    findAll(): any;
    findBook(bookId: string): string;
    findParamsAll(params: any): any;
    findQueryAll(params: any): any;
    createBook(newBook: BookDto): BookDto;
    deleteBook(bookId: string): string;
    updateBook(bookId: string, newBook: BookDto): BookDto;
}
