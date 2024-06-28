import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../books/books';
import { BooksService } from '../../shared/books.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  books: Book[] = [];
  bookToEdit: Book | undefined;

  constructor(
    private route: ActivatedRoute,
    private booksService: BooksService,
    private router: Router
  ) {}

  ngOnInit() {
    this.books = this.booksService.getAll();
    const bookId = this.route.snapshot.paramMap.get('id');
    if (bookId) {
      this.bookToEdit = this.booksService.getOne(+bookId);
    }
  }

  editBook(book: Book): void {
    this.bookToEdit = { ...book };
  }

  onSubmit(): void {
    if (this.bookToEdit) {
      this.booksService.edit(this.bookToEdit);
      this.bookToEdit = undefined;
      this.router.navigate(['/books']);
    }
  }
}
