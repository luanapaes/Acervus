import { Component, inject, Input, input, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { BorrowedBook } from '../../../../../shared/interfaces/livro-emprestado';
import { PhonePipe } from '../../../../../shared/pipe/phone-pipe/phone.pipe';
import { CommonModule, DatePipe } from '@angular/common';
import { TitlePipe } from '../../../../../shared/pipe/title-transform/title.pipe';
import { EmprestimoVencidoService } from '../../../../../shared/services/emprestimo-vencido.service';

@Component({
  selector: 'app-leitor-panel',
  standalone: true,
  imports: [MatExpansionModule, PhonePipe, DatePipe, CommonModule, TitlePipe],
  templateUrl: './leitor-panel.component.html',
  styleUrl: './leitor-panel.component.scss'
})
export class LeitorPanelComponent {
  @Input() panelOpenState = false;
  // informações do leitor
  @Input() nome_completo: string = '';
  @Input() email: string = '';
  @Input() numero_contato: string = '';
  @Input() livros_emprestados: BorrowedBook[] = [];
  
  //utilizado para calcular os dias do emprestimo
  emprestimoVencidoService = inject(EmprestimoVencidoService);
  dataFinal: Date[] = [];
  diasRestantes: number[] = [];
  diasRestantesPositive: number[] = [];
  valorTaxa: number[] = [];
  
  bookArray: BorrowedBook[] = [];
  livroAtual = 0;

  ngOnInit(): void {
    this.loadBooks();

    //guarda os valores nos arrays para permitir resalizar as operações de forma individual em cada obj
    for(let i = 0; i < this.livros_emprestados.length; i++){
      this.dataFinal[i] = this.emprestimoVencidoService.calcularDataDevolucao(
        this.livros_emprestados[i].data_emprestimo
      );

      this.diasRestantes[i] = this.emprestimoVencidoService.calcularDiasRestantes(
        this.livros_emprestados[i].data_emprestimo
      );

      //os dias restantes podem ser menores que zero, para melhorar a visualização no card
      //eu uso o math.abs para deixalos positivo , ex: -12 = 12
      let diasPositive = Math.abs(this.diasRestantes[i])
      this.diasRestantesPositive.push(diasPositive);

      let valorTaxaEmprstimo = this.emprestimoVencidoService.calcularTaxa(this.diasRestantesPositive[i]);
      this.valorTaxa.push(valorTaxaEmprstimo);
    }

    console.log(this.diasRestantesPositive)

  }

  avancar() {
    if (this.livroAtual < this.livros_emprestados.length - 1) {
      this.livroAtual++;
    }
  }

  voltar() {
    if (this.livroAtual > 0) {
      this.livroAtual--;
    }
  }

  loadBooks(){
    this.livros_emprestados.map((book) => {
      this.bookArray.push(book)
    })
  }
}

