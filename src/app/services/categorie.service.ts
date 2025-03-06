import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import { Book } from '../models/book.model';

@Injectable({
    providedIn: 'root'
  })
  export class categorieService {
    constructor(private http:HttpClient) { }
  
    urlCategorie = "http://localhost:8081/api/categories";
    
    GetAllCategories(): Observable<Book[]> {
      return this.http.get<Book[]>(`${this.urlCategorie}`);
    }
    
    GetOneCategorie(id: number): Observable<Book> {
      return this.http.get<Book>(`${this.urlCategorie}/${id}`);
    }

    PostNewCategorie(categorie: FormData): Observable<Book> {
      return this.http.post<Book>(`${this.urlCategorie}`, categorie);
    }

    PutCategorie(id: number, categorie: FormData): Observable<Book> {
      return this.http.put<Book>(`${this.urlCategorie}/${id}`, categorie);
    }

    DeleteCategorie(id: number): Observable<Book> {
      return this.http.delete<Book>(`${this.urlCategorie}/${id}`);
    }
  }