import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
  findAll(): any { 
    return 'findAll 0 funcionando';
  }
  findBook(bookId: string) {
    return `findBook funcionando con bookId: ${bookId}`;
  }
  findParamsAll(params): any {
    return params.length > 0
      ? `findAll 1 funcionando con ${params}`
      : 'findAll 2 funcionando';
  }
  findQueryAll(params): any {
    let msg = `findAll funcionando. Parámetros:`;

    if (params.order !== undefined) {
      msg = msg + ` order: ${params.order}`;
    }

    if (params.limit !== undefined) {
      msg = msg + ` limit: ${params.limit}`;
    }

    return msg;
  }    
}