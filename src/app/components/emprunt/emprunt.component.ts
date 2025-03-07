import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Emprunt } from '../../models/emprunt';
import { EmpruntService } from '../../services/emprunt';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {DatePipe, NgForOf} from '@angular/common';

@Component({
  selector: 'app-emprunt',
  templateUrl: './emprunt.component.html',
  styleUrls: ['./emprunt.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, DatePipe, NgForOf]
})
export class EmpruntComponent implements OnInit {
  empruntForm: FormGroup;
  error?: string;
  derniersEmprunts: Emprunt[] = []; // Tableau pour stocker les derniers emprunts

  constructor(
    private fb: FormBuilder,
    private empruntService: EmpruntService,
    private router: Router
  ) {
    this.empruntForm = this.fb.group({
      userId: [0, Validators.required],
      livre_id: [0, Validators.required],
      date_emprunt: ['', Validators.required],
      date_retour: ['', Validators.required],
      statut: ['dispo', Validators.required]
    });
  }

  addEmprunt() {
    if (this.empruntForm.valid) {
      const emprunt: Emprunt = this.empruntForm.value;
      console.log(emprunt);
      this.empruntService.addEmprunt(emprunt).subscribe({
        next: () => {
          this.router.navigate(['/login']);
        },
        error: (error) => {
          this.error = error.message;
        }
      });
    }
  }

  ngOnInit(): void {
    // Récupérer tous les emprunts et afficher les 3 derniers
    this.empruntService.getAll().subscribe({
      next: (data) => {
        // Trier par date et prendre les 3 derniers emprunts
        // @ts-ignore
        this.derniersEmprunts = data.sort((a, b) => new Date(b.date_emprunt).getTime() - new Date(a.date_emprunt).getTime()).slice(0, 3);
      },
      error: (error) => {
        this.error = error.message;
      }
    });
  }
}
