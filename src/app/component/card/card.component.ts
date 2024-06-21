import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/pages/books/books';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() book!: Book;
  @Input() isEven!: boolean;
  @Output() delete = new EventEmitter<number>();

  removeCard() {
    this.delete.emit(this.book.id_book);
  }
}
