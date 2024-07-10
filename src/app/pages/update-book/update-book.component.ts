import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../books/books';
import { BooksService } from '../../shared/books.service';
import { Respuesta } from '../../models/respuesta/respuesta.component';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  books: Book[] = [];
  bookToEdit: Book | undefined;
  error: boolean = false;
  message: string = '';

  constructor(
    private booksService: BooksService,
    private router: Router
  ) {}

  ngOnInit() {
    this.booksService.getAll().subscribe((response: Respuesta) => {
      if (!response.error) {
        this.books = response.data;
      } else {
        this.error = true;
        this.message = response.message;
      }
    });
  }

  editBook(book: Book) {
    this.bookToEdit = { ...book };
  }

  onSubmit() {
    if (this.bookToEdit) {
      this.booksService.edit(this.bookToEdit).subscribe(
        (response: Respuesta) => {
          if (!response.error) {
            this.router.navigate(['/books']);
          } else {
            this.error = true;
            this.message = response.message;
          }
        },
        (error) => {
          this.error = true;
          this.message = 'Error updating book';
        }
      );
    }
  }
}
