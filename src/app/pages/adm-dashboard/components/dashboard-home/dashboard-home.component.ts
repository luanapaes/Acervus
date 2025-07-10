import { Component } from '@angular/core';
import { EventoCardComponent } from '../evento-card/evento-card.component';
import { Evento } from '../../../../shared/interfaces/eventos';

@Component({
  selector: 'app-dashboard-home',
  standalone: true,
  imports: [EventoCardComponent],
  templateUrl: './dashboard-home.component.html',
  styleUrl: './dashboard-home.component.scss'
})
export class DashboardHomeComponent {
  eventos: Evento[] = [
    {
      title: 'Clube da Leitura',
      description: 'Nosso clube de leitura terá início às 15h e irá até às 17h30, venha fazer parte conosco!'
    }, 
    {
      title: 'Clube da Leitura',
      description: 'Nosso clube de leitura terá início às 15h e irá até às 17h30, venha fazer parte conosco!'
    }, 
    {
      title: 'Clube da Leitura',
      description: 'Nosso clube de leitura terá início às 15h e irá até às 17h30, venha fazer parte conosco!'
    }, 
    {
      title: 'Clube da Leitura',
      description: 'Nosso clube de leitura terá início às 15h e irá até às 17h30, venha fazer parte conosco!'
    }
  ]
}
