import { Injectable } from '@angular/core';
import { Evento } from '../interfaces/evento';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  eventosArray: Evento[] = [
    {
      title: "Clube do Livro",
      description: "Hoje (11/07) as 15h30, traga suas crianças!"
    }, 
    {
      title: "Clube do Livro",
      description: "Hoje (11/07) as 15h30, traga suas crianças!"
    }, 
    {
      title: "Clube do Livro",
      description: "Hoje (11/07) as 15h30, traga suas crianças!"
    }, 
  ];
  
  constructor() { }

  get(){
    return this.eventosArray;
  }

  create(evento: Evento){
    return this.eventosArray.push(evento);
  }
}
