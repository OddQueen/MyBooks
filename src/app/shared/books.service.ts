import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../pages/books/books';
import { Respuesta } from '../models/respuesta/respuesta.component';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private apiUrl = 'http://localhost:3000/api/books';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Respuesta> {
    return this.http.get<Respuesta>(this.apiUrl);
  }

  getOne(id_book: number): Observable<Respuesta> {
    return this.http.get<Respuesta>(this.apiUrl + '/' + id_book);
  }

  add(book: Book): Observable<Respuesta> {
    return this.http.post<Respuesta>(this.apiUrl, book);
  }

  edit(book: Book): Observable<Respuesta> {
    return this.http.put<Respuesta>(this.apiUrl + '/' + book.id_book, book);
  }

  delete(id_book: number): Observable<Respuesta> {
    return this.http.delete<Respuesta>(this.apiUrl + '/' + id_book);
  }
}
