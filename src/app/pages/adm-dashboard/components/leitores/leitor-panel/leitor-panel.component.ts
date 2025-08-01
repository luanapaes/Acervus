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
  @Input() fullname: string = '';
  @Input() email: string = '';
  @Input() phone_number: string = '';
  @Input() borrowed_book: BorrowedBook[] = [];

  bookArray: BorrowedBook[] = [];

  livroAtual = 0;

  ngOnInit(): void {
    this.loadBooks()
  }

  avancar() {
    if (this.livroAtual < this.borrowed_book.length - 1) {
      this.livroAtual++;
    }
  }

  voltar() {
    if (this.livroAtual > 0) {
      this.livroAtual--;
    }
  }

  loadBooks(){
    this.borrowed_book.map((book) => {
      this.bookArray.push(book)
    })
  }
}

