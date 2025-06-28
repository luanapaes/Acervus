import { Component, Inject } from '@angular/core';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-emprestimo-dialog',
  standalone: true,
  imports: [ MatDialogModule ],
  templateUrl: './emprestimo-dialog.component.html',
  styleUrl: './emprestimo-dialog.component.scss'
})
export class EmprestimoDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<EmprestimoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }
}
