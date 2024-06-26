import { Injectable } from '@angular/core';
import { Book } from '../pages/books/books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private books: Book[] = [
    new Book(397020, 1, 'El principito', 'Tapa blanda', 'Antoine de Saint-Exupéry', 12.99, 'assets/img/principito.png'),
    new Book(304920, 1, 'Orgullo y prejuicio', 'Tapa dura', 'Jane Austen', 19.99, 'assets/img/orgullo.png'),
    new Book(301479, 1, 'Diario de Ana Frank', 'Tapa blanda', 'Ana Frank', 15.99, 'assets/img/ana frank.png')
  ];

  getAll(): Book[] {
    return this.books;
  }

  getOne(id_book: number): Book | undefined {
    return this.books.find(book => book.id_book === id_book);
  }

  add(book: Book): void {
    this.books.push(book);
  }

  edit(book: Book): boolean {
    const index = this.books.findIndex(b => b.id_book === book.id_book);
    if (index !== -1) {
      this.books[index] = book;
      return true;
    }
    return false;
  }

  delete(id_book: number): boolean {
    const index = this.books.findIndex(book => book.id_book === id_book);
    if (index !== -1) {
      this.books.splice(index, 1);
      return true;
    }
    return false;
  }
}
