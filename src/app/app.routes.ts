import { Routes } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {BookComponent} from './components/book/book.component';
import {CategorieComponent} from './components/categorie/categorie.component';
import {CreateCategorieComponent} from './components/create-categorie/create-categorie.component';

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'book', component: BookComponent},
  {path: 'categories', component: CategorieComponent},
  {path: 'categorie-form', component: CreateCategorieComponent},
  {path: 'categorie-form/:id', component: CreateCategorieComponent},
];
