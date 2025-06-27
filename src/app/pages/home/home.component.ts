import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/components/header/header.component";
import { BookCardComponent } from '../../shared/components/book-card/book-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, BookCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
