import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-renovar-emprestimo-dialog',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
  templateUrl: './renovar-emprestimo-dialog.component.html',
  styleUrl: './renovar-emprestimo-dialog.component.scss'
})
export class RenovarEmprestimoDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<RenovarEmprestimoDialogComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: { bookName: string }

  ) { }
}
