import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { EmprestimoDialogComponent } from '../emprestimo-dialog/emprestimo-dialog.component';

@Component({
  selector: 'app-emprestimo-card',
  standalone: true,
  imports: [DatePipe, MatButtonModule, MatDialogModule],
  templateUrl: './emprestimo-card.component.html',
  styleUrl: './emprestimo-card.component.scss'
})
export class EmprestimoCardComponent {
  @Input() nomeBook: string = "";
  @Input() dataInicialEmprestimo!: Date;
  dataFinal!: Date;
  diasRestantes!: number;
  diasRestantesPositive!: number;
  taxa = 1.30;
  dividaEmprestimo!: number;

  constructor(public dialog: MatDialog) { }
  
  ngOnChanges(): void {
    this.dataFinal = this.calcularDataDevolucao();
    this.diasRestantes = this.calcularDiasRestantes();
    
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

  calcularDataDevolucao(){
    return new Date(this.dataInicialEmprestimo.getTime() + 7 * 24 * 60 * 60 * 1000);    
  }

  calcularDiasRestantes(){
    const hoje = new Date();
    const dataDevolucao = this.calcularDataDevolucao();
    const diffMs = dataDevolucao.getTime() - hoje.getTime();
    return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
  }

}

// data de devolução = dtInicial + 7 dias
