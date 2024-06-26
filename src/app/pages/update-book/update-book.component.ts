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
  book: Book | undefined;

  constructor(
    private route: ActivatedRoute,
    private booksService: BooksService,
    private router: Router
  ) {}

  ngOnInit() {
    const bookId = +this.route.snapshot.paramMap.get('id')!;
    this.book = this.booksService.getOne(bookId);
  }

  updateBook() {
    if (this.book) {
      this.booksService.edit(this.book);
      this.router.navigate(['/books']);
    }
  }
}
