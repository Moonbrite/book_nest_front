import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {environnement} from "../environement/environement";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Emprunt} from "../models/emprunt";
import {AuthResponse} from "../models/auth-response";
import {AuthRequest} from "../models/auth-request";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class EmpruntService {

  constructor(
    private httpClient:HttpClient,
    private router:Router,
  ) {

  }

  //apiUrl: string = "http://195.15.204.108/api/register"
  apiAuth:string =environnement.authUrl


  // Create a Emprunt with api
  addEmprunt(Emprunt: Emprunt | undefined): Observable<Emprunt>{
    return this.httpClient.post<Emprunt>("http://195.15.204.108/api/emprunts", Emprunt).pipe(
      retry(1),
    )
  }
}
