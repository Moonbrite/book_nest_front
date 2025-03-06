import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http:HttpClient) { }

  urlBook = "http://localhost:8081/api/books";

  GetAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.urlBook}`);
  }

  GetOneBook(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.urlBook}/${id}`);
  }

  PostNewBook(book: FormData): Observable<Book> {
    return this.http.post<Book>(`${this.urlBook}`, book);
  }

  PutBook(id: number, book: FormData): Observable<Book> {
    return this.http.put<Book>(`${this.urlBook}/${id}`, book);
  }

  DeleteBook(id: number): Observable<Book> {
    return this.http.delete<Book>(`${this.urlBook}/${id}`);
  }

  SearchBook(title?: string, author?: string): Observable<any> {
    let params = new HttpParams();

    if (title) {
      params = params.set('title', title);
    }
    if (author) {
      params = params.set('author', author);
    }

    return this.http.get(`${this.urlBook}/search`, { params });
  }
}