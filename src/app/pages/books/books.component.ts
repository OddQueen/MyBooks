import { Component } from '@angular/core';
import { Book } from './books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  books: Book[] = [
    new Book(1, 1, 'El principito', 'Tapa blanda', 'Antoine de Saint-Exupéry', 12.99, 'assets/img/principito.png', 'Ref-397020'),
    new Book(2, 1, 'Orgullo y prejuicio', 'Tapa dura', 'Jane Austen', 19.99, 'assets/img/orgullo.png', 'Ref-304920'),
    new Book(3, 1, 'Diario de Ana Frank', 'Tapa blanda', 'Ana Frank', 15.99, 'assets/img/ana frank.png', 'Ref-301479')
  ];
  newBook: Book = new Book(0, 0, '', '', '', 0, '', '');

  addBook() {
    let nextId = this.books.length ? Math.max(...this.books.map(book => book.id_book)) + 1 : 1;
    this.books.push(new Book(nextId, this.newBook.id_user, this.newBook.title, this.newBook.type, this.newBook.author, this.newBook.price, this.newBook.photo, this.newBook.ref));
    this.newBook = new Book(0, 0, '', '', '', 0, '', '');
  }
}
