import { Injectable } from '@angular/core';
import { Evento } from '../interfaces/evento';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  eventosArray: Evento[] = [];
  
  constructor() { }

  get(){
    return this.eventosArray;
  }

  create(evento: Evento){
    return this.eventosArray.push(evento);
  }
}
