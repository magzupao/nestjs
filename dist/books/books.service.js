"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksService = void 0;
const common_1 = require("@nestjs/common");
let BooksService = class BooksService {
    findAll() {
        return 'findAll 0 funcionando';
    }
    findBook(bookId) {
        return `findBook funcionando con bookId: ${bookId}`;
    }
    findParamsAll(params) {
        return params.length > 0
            ? `findAll 1 funcionando con ${params}`
            : 'findAll 2 funcionando';
    }
    findQueryAll(params) {
        let msg = `findAll funcionando. Parámetros:`;
        if (params.order !== undefined) {
            msg = msg + ` order: ${params.order}`;
        }
        if (params.limit !== undefined) {
            msg = msg + ` limit: ${params.limit}`;
        }
        return msg;
    }
    createBook(newBook) {
        return newBook;
    }
};
BooksService = __decorate([
    (0, common_1.Injectable)()
], BooksService);
exports.BooksService = BooksService;
//# sourceMappingURL=books.service.js.map