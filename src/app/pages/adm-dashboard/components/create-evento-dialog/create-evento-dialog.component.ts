import { Component, inject } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Evento } from '../../../../shared/interfaces/evento';
import { EventoService } from '../../../../shared/services/evento.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CreateEventoSnackbarComponent } from '../../../../shared/components/create-evento-snackbar/create-evento-snackbar.component';

@Component({
  selector: 'app-create-evento-dialog',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, ReactiveFormsModule],
  templateUrl: './create-evento-dialog.component.html',
  styleUrl: './create-evento-dialog.component.scss'
})
export class CreateEventoDialogComponent {
  eventoService = inject(EventoService);

  durationInSeconds = 5;

  constructor(private _snackBar: MatSnackBar) { }

  
  eventoForm = new FormGroup({
    titulo: new FormControl('', Validators.required),
    descricao: new FormControl('', Validators.required)
  });
  
  openSnackBar(message: string) {
    this._snackBar.openFromComponent(CreateEventoSnackbarComponent, {
      duration: this.durationInSeconds * 1000,
      data: {message}
    });
  }

  onSubmit() {
    if (this.eventoForm.valid) {
      const evento: Evento = {
        titulo: this.eventoForm.value.titulo as string,
        descricao: this.eventoForm.value.descricao as string
      }
      this.eventoService.create(evento);
      this.openSnackBar("Evento cadastrado com sucesso!")
    } else{
      this.openSnackBar("Por favor, informe o título e descrição do evento.")
    }
  }


}
