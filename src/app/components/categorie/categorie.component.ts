import { Component, OnInit, signal, computed } from '@angular/core';
import { CategorieService } from '../../services/categorie';
import {Router, RouterLink} from '@angular/router';
import {DatePipe, NgForOf, NgIf} from '@angular/common';
import {CeilPipe} from '../../pipe/ceil';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    CeilPipe,
    RouterLink
  ],
  styleUrl: './categorie.component.scss'
})
export class CategorieComponent implements OnInit {

  categories = signal<any[]>([]);
  currentPage = signal(1);
  itemsPerPage = 7;


  paginatedCategories = computed(() => {
    const start = (this.currentPage() - 1) * this.itemsPerPage;
    return this.categories().slice(start, start + this.itemsPerPage);
  });

  constructor(private categorieService: CategorieService, private router: Router) {}

  ngOnInit(): void {
    this.categorieService.getAllCategories().subscribe({
      next: (data: any) => {
        this.categories.set(data.categories);
      },
      error: (err): void => {
        console.error('Erreur lors du chargement des catégories', err);
      }
    });
  }

  nextPage() {
    if (this.currentPage() < Math.ceil(this.categories().length / this.itemsPerPage)) {
      this.currentPage.set(this.currentPage() + 1);
    }
  }

  prevPage() {
    if (this.currentPage() > 1) {
      this.currentPage.set(this.currentPage() - 1);
    }
  }

  goToEditPage(categorieId: number) {
    this.router.navigate(['/categorie-form', categorieId]);
  }

  protected readonly Number = Number;
}
