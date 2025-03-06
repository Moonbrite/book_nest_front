import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import { Author } from '../models/author.model';

@Injectable({
    providedIn: 'root'
  })
  export class authorService {
    constructor(private http:HttpClient) { }
  
    urlAuthor = "http://localhost:8081/api/authors";
    
    GetAllAuthors(): Observable<Author[]> {
      return this.http.get<Author[]>(`${this.urlAuthor}`);
    }

    GetOneAuthor(id: number): Observable<Author> {
      return this.http.get<Author>(`${this.urlAuthor}/${id}`);
    }

    PostNewAuthor(author: FormData): Observable<Author> {
      return this.http.post<Author>(`${this.urlAuthor}`, author);
    }

    PutAuthor(id: number, author: FormData): Observable<Author> {
      return this.http.put<Author>(`${this.urlAuthor}/${id}`, author);
    }

    DeleteAuthor(id: number): Observable<Author> {
      return this.http.delete<Author>(`${this.urlAuthor}/${id}`);
    }
}