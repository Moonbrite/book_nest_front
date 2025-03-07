import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Emprunt } from '../../models/emprunt';
import { EmpruntService } from '../../services/emprunt';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-emprunt',
  templateUrl: './emprunt.component.html',
  styleUrls: ['./emprunt.component.scss'],
  imports: [ReactiveFormsModule, HttpClientModule  ]
})
export class EmpruntComponent {
  empruntForm: FormGroup;
  error?: string;

  constructor(private fb: FormBuilder, private empruntService: EmpruntService, private router: Router) {
    this.empruntForm = this.fb.group({
      user_id: [0, Validators.required],
      livre_id: [0, Validators.required],
      date_emprunt: ['', Validators.required],
      date_retour: ['', Validators.required],
      statut: ['dispo', Validators.required]
    });
  }

  addEmprunt() {
    if (this.empruntForm.valid) {
      const emprunt: Emprunt = this.empruntForm.value;
      this.empruntService.addEmprunt(emprunt).subscribe({
        next: () => this.router.navigate(['/success']),
        error: (error) => this.error = error.message
      });
    }
  }
}
