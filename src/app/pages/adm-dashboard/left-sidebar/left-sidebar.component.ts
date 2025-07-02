import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-left-sidebar',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule, RouterLink, RouterOutlet],
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.scss'
})
export class LeftSidebarComponent {
  isOpen = false;

  toggleSidenav() {
    this.isOpen = !this.isOpen;
  }

  closeSidenav() {
    this.isOpen = false;
  }
}