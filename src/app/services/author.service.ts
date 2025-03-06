import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import { Book } from '../models/book.model';

@Injectable({
    providedIn: 'root'
  })
  export class authorService {
    constructor(private http:HttpClient) { }
  
    urlAuthor = "http://localhost:8081/api/authors";
    
    GetAllAuthors(): Observable<Book[]> {
      return this.http.get<Book[]>(`${this.urlAuthor}`);
    }

    GetOneAuthor(id: number): Observable<Book> {
      return this.http.get<Book>(`${this.urlAuthor}/${id}`);
    }

    PostNewAuthor(author: FormData): Observable<Book> {
      return this.http.post<Book>(`${this.urlAuthor}`, author);
    }

    PutAuthor(id: number, author: FormData): Observable<Book> {
      return this.http.put<Book>(`${this.urlAuthor}/${id}`, author);
    }

    DeleteAuthor(id: number): Observable<Book> {
      return this.http.delete<Book>(`${this.urlAuthor}/${id}`);
    }
}