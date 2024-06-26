import { Component, OnInit } from '@angular/core';
import { Book } from './books';
import { BooksService } from '../../shared/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[] = [];
  filteredBooks: Book[] = [];
  searchTerm: string = '';

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.books = this.booksService.getAll();
    this.filteredBooks = this.books;
  }

  searchBooks(): void {
    if (this.searchTerm) {
      this.filteredBooks = this.books.filter(book =>
        book.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredBooks = this.books;
    }
  }

  onDeleteBook(bookId: number): void {
    this.booksService.delete(bookId);
    this.books = this.booksService.getAll();
    this.searchBooks();
  }
}
