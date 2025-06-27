import { Component } from '@angular/core';

@Component({
  selector: 'app-event-carousel',
  standalone: true,
  imports: [],
  templateUrl: './event-carousel.component.html',
  styleUrl: './event-carousel.component.scss'
})
export class EventCarouselComponent {
  eventos = [
    {
      titulo: 'CLUBE DE LEITURA',
      descricao: 'Nosso clube de leitura terá início às 15h e irá até às 17h30, venha fazer parte conosco!'
    },
    {
      titulo: 'CONTAÇÃO DE HISTÓRIAS',
      descricao: 'Evento para crianças às 10h da manhã no espaço infantil. Traga seus pequenos!'
    },
    {
      titulo: 'OFICINA DE POESIA',
      descricao: 'Explore sua criatividade no sábado às 14h com nossa oficina gratuita!'
    }
  ];

  eventoAtual = 0;

  proximoEvento() {
    this.eventoAtual = (this.eventoAtual + 1) % this.eventos.length;
  }

  eventoAnterior() {
    this.eventoAtual = (this.eventoAtual - 1 + this.eventos.length) % this.eventos.length;
  }
}
