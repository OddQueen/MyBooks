import { Component, OnInit } from '@angular/core';
import { Book } from './books';
import { BooksService } from '../../shared/books.service';
import { Respuesta } from '../../models/respuesta/respuesta.component';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[] = [];
  filteredBooks: Book[] = [];
  searchTerm: number | undefined;

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.booksService.getAll().subscribe((response: Respuesta) => {
      if (!response.error) {
        this.books = response.data;
        this.filteredBooks = this.books;
      } else {
        console.error(response.message);
      }
    });
  }

  searchBooks(): void {
    if (this.searchTerm !== undefined) {
      this.filteredBooks = this.books.filter(book => book.id_book === this.searchTerm);
    } else {
      this.filteredBooks = this.books;
    }
  }

  onDeleteBook(bookId: number): void {
    this.booksService.delete(bookId).subscribe((response: Respuesta) => {
      if (!response.error) {
        this.booksService.getAll().subscribe((response: Respuesta) => {
          if (!response.error) {
            this.books = response.data;
            this.searchBooks();
          }
        });
      } else {
        console.error(response.message);
      }
    });
  }
}
