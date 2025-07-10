import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-evento-card',
  standalone: true,
  imports: [],
  templateUrl: './evento-card.component.html',
  styleUrl: './evento-card.component.scss'
})
export class EventoCardComponent {
  @Input() titleEvento: string = '';
  @Input() description: string = '';
}
