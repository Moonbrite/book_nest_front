import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import { Categorie } from '../models/category';

@Injectable({
    providedIn: 'root'
  })
  export class CategorieService {
    constructor(private http:HttpClient) { }

    urlCategorie = "http://193.134.250.176/api/categories";

    getAllCategories(): Observable<Categorie[]> {
      return this.http.get<Categorie[]>(`${this.urlCategorie}`);
    }

    getOneCategorie(id: number): Observable<Categorie> {
      return this.http.get<Categorie>(`${this.urlCategorie}/${id}`);
    }

    postNewCategorie(categorie: FormData): Observable<Categorie> {
      return this.http.post<Categorie>(`${this.urlCategorie}`, categorie);
    }

    putCategorie(id: number, categorie: FormData): Observable<Categorie> {
      return this.http.put<Categorie>(`${this.urlCategorie}/${id}`, categorie);
    }

    deleteCategorie(id: number): Observable<Categorie> {
      return this.http.delete<Categorie>(`${this.urlCategorie}/${id}`);
    }
  }
