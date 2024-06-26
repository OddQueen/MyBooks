import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../books/books';
import { BooksService } from '../../shared/books.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})

export class AddBookComponent {
  newBook: Book = new Book(0, 0, '', '', '', 0, '');

  constructor(private booksService: BooksService, private router: Router) {}

  addBook() {
    this.booksService.add(this.newBook);
    this.newBook = new Book(0, 0, '', '', '', 0, '');
    this.router.navigate(['/books']);
  }
}
