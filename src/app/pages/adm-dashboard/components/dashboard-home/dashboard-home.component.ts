import { Component, inject, signal } from '@angular/core';
import { EventoCardComponent } from '../evento-card/evento-card.component';
import { Evento } from '../../../../shared/interfaces/evento';
import { MatDialog } from '@angular/material/dialog';
import { CreateEventoDialogComponent } from '../create-evento-dialog/create-evento-dialog.component';
import { EventoService } from '../../../../shared/services/evento.service';

@Component({
  selector: 'app-dashboard-home',
  standalone: true,
  imports: [EventoCardComponent],
  templateUrl: './dashboard-home.component.html',
  styleUrl: './dashboard-home.component.scss'
})
export class DashboardHomeComponent {
  eventoService = inject(EventoService);
  eventos = signal<Evento[]>([]);

  constructor(public dialog: MatDialog){}

  ngOnInit(): void {
    this.loadEventos();
  }

  openDialog(){
    const dialogRef = this.dialog.open(CreateEventoDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log("Resultado: ", result);
    });
  }

  loadEventos(){
    return this.eventoService.get();
  }
  
}
