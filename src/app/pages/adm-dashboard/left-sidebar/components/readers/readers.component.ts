import { Component } from '@angular/core';
import { Reader } from '../../../../../shared/interfaces/reader';
import { CardReaderComponent } from "../card-reader/card-reader.component";

@Component({
  selector: 'app-readers',
  standalone: true,
  imports: [CardReaderComponent],
  templateUrl: './readers.component.html',
  styleUrl: './readers.component.scss'
})
export class ReadersComponent {
  leitores: Reader[] = [
    {
      fullname: "Luana Paes",
      phone_number: "(81)98562-4853",
      email: "luanapaes@gmail.com",
      borrowed_book: [
        {
          book_name: "A Menina que Roubava Livros",
          book_description: "Livro que retrata a perseguição na guerra fria.",
          loan_date: "02/07/2025",
          loan_qtd: 2
        }, 
        {
          book_name: "Java Para Iniciantes",
          book_description: "ALgoritmo e Lógica de Programação com Java",
          loan_date: "30/06/2025",
          loan_qtd: 3
        }
      ]
    }, 
    {
      fullname: "Jamilli França",
      phone_number: "(81)98818-1522",
      email: "jam_franca@gmail.com",
      borrowed_book: [
        {
          book_name: "Educação de Crianças Autistas",
          book_description: "Livro que detalha técninas de como lidar com alunos autistas.",
          loan_date: "30/06/2025",
          loan_qtd: 1
        }
      ]
    }
  ]
}
