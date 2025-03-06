import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import { Category } from '../models/category.model';

@Injectable({
    providedIn: 'root'
  })
  export class categorieService {
    constructor(private http:HttpClient) { }
  
    urlCategorie = "http://localhost:8081/api/categories";
    
    GetAllCategories(): Observable<Category[]> {
      return this.http.get<Category[]>(`${this.urlCategorie}`);
    }
    
    GetOneCategorie(id: number): Observable<Category> {
      return this.http.get<Category>(`${this.urlCategorie}/${id}`);
    }

    PostNewCategorie(categorie: FormData): Observable<Category> {
      return this.http.post<Category>(`${this.urlCategorie}`, categorie);
    }

    PutCategorie(id: number, categorie: FormData): Observable<Category> {
      return this.http.put<Category>(`${this.urlCategorie}/${id}`, categorie);
    }

    DeleteCategorie(id: number): Observable<Category> {
      return this.http.delete<Category>(`${this.urlCategorie}/${id}`);
    }
  }