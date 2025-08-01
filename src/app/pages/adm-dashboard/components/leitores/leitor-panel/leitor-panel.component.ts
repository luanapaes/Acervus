import { Component, Input, input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { BorrowedBook } from '../../../../../shared/interfaces/livro-emprestado';
import { PhonePipe } from '../../../../../shared/pipe/phone-pipe/phone.pipe';
import { CommonModule, DatePipe } from '@angular/common';
import { TitlePipe } from '../../../../../shared/pipe/title-transform/title.pipe';

@Component({
  selector: 'app-leitor-panel',
  standalone: true,
  imports: [MatExpansionModule, PhonePipe, DatePipe, TitlePipe, CommonModule],
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

  bookArray: BorrowedBook[] = [];

  livroAtual = 0;

  ngOnInit(): void {
    this.loadBooks()
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

