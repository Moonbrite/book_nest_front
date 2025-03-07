import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CategorieService} from '../../services/categorie';
import {Categorie} from '../../models/category';

@Component({
  selector: 'app-book',
  imports: [],
  templateUrl: './book.component.html',
  standalone: true,
  styleUrl: './book.component.scss'
})
export class BookComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }


}
