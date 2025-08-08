import { DatePipe } from '@angular/common';
import { Component, inject, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { EmprestimoDialogComponent } from '../emprestimo-dialog/emprestimo-dialog.component';
import { EmprestimoVencidoService } from '../../services/emprestimo-vencido.service';

@Component({
  selector: 'app-emprestimo-card',
  standalone: true,
  imports: [DatePipe, MatButtonModule, MatDialogModule],
  templateUrl: './emprestimo-card.component.html',
  styleUrl: './emprestimo-card.component.scss'
})
export class EmprestimoCardComponent {
  emprestimoVencidoService = inject(EmprestimoVencidoService);
  @Input() nomeBook: string = "";
  @Input() dataInicialEmprestimo!: Date;
  dataFinal!: Date;
  diasRestantes!: number;
  diasRestantesPositive!: number;
  taxa = this.emprestimoVencidoService.taxa;
  dividaEmprestimo!: number;

  constructor(public dialog: MatDialog) { }
  
  ngOnChanges(): void {
    this.dataFinal = this.emprestimoVencidoService.calcularDataDevolucao(this.dataInicialEmprestimo);
    this.diasRestantes = this.emprestimoVencidoService.calcularDiasRestantes(this.dataInicialEmprestimo);
    
    // quando os dias passam de 7 ficam negativos então usei a função para deixalos positivos
    this.diasRestantesPositive = Math.abs(this.diasRestantes);
    this.dividaEmprestimo = Math.abs(this.diasRestantes * this.taxa);
  }
  

  openDialog() {
    const dialogRef = this.dialog.open(EmprestimoDialogComponent, {
      data: { nomeLivro: this.nomeBook},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}