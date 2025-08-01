import { Injectable } from '@angular/core';
import { Evento } from '../interfaces/evento';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  eventosArray: Evento[] = [
    {
      titulo: "Clube do Livro",
      descricao: "Hoje (11/07) as 15h30, traga suas crianças!"
    },
    {
      titulo: "Clube do Livro",
      descricao: "Hoje (11/07) as 15h30, traga suas crianças!"
    },
    {
      titulo: "Clube do Livro",
      descricao: "Hoje (11/07) as 15h30, traga suas crianças!"
    },
  ];

  constructor() { }

  get() {
    return this.eventosArray;
  }

  create(evento: Evento) {
    return this.eventosArray.push(evento);
  }
}
