import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorieService } from '../../services/categorie';

@Component({
  selector: 'app-create-categorie',
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './create-categorie.component.html',
  standalone: true,
  styleUrl: './create-categorie.component.scss'
})
export class CreateCategorieComponent implements OnInit {

  form!: FormGroup;
  isEditMode = signal(false);
  categorieId?: number;

  constructor(
    private fb: FormBuilder,
    private categorieService: CategorieService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Initialisation du formulaire
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]]
    });

    // Vérifie si un ID est passé dans l'URL
    this.categorieId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.categorieId) {
      this.isEditMode.set(true);
      this.loadCategorie();
    }
  }

  // Charge la catégorie en mode édition
  loadCategorie() {
    this.categorieService.getOneCategorie(this.categorieId!).subscribe(categorie => {
      console.log(categorie);
      this.form.patchValue({
        name: categorie.name,
        description: categorie.description
      });
    });
  }

  submit() {
    if (this.form.invalid) return;

    const categorieData = this.form.value;

    if (this.isEditMode()) {
      // Mode édition
      this.categorieService.putCategorie(this.categorieId!, categorieData).subscribe(() => {
        this.router.navigate(['/categories']);
      });
    } else {
      // Mode ajout
      this.categorieService.postNewCategorie(categorieData).subscribe(() => {
        this.router.navigate(['/categories']);
      });
    }
  }

  cancel() {
    this.router.navigate(['/categories']);
  }
}
