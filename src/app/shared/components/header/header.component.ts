import { Component, Input } from '@angular/core';
import { LogoutButtonComponent } from "../logout-button/logout-button.component";
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoutButtonComponent, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() isLogout: boolean = false;
}
