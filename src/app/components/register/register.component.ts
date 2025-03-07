import {Component} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {User} from "../../models/user";
import {UserService} from "../../services/user";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
    FormsModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  user: User = new User();

  constructor(private serviceUser: UserService, private router: Router) {
  }

  error?: string;

  addUser() {
    this.serviceUser.registerUser(this.user).subscribe({
      next: (data) => {
        this.router.navigate(['/login']);
      },
      error: (error) => {
        this.error = error.type;
      }
    });
  }


}
