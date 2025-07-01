import { Component, inject, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout-button',
  standalone: true,
  imports: [],
  templateUrl: './logout-button.component.html',
  styleUrl: './logout-button.component.scss'
})
export class LogoutButtonComponent {
  router = inject(Router);

  logout(){
    setTimeout(() => {
      this.router.navigate(['']);
    }, 3000)
  }
}
