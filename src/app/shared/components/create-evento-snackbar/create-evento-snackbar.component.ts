import { Component, Inject, inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-evento-snackbar',
  standalone: true,
  imports: [],
  templateUrl: './create-evento-snackbar.component.html',
  styleUrl: './create-evento-snackbar.component.scss'
})
export class CreateEventoSnackbarComponent {
  snackBarRef = inject(MatSnackBarRef);

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: { message: string }) { }
}
