import { Component, signal } from '@angular/core';
import { Leitor } from '../../../../shared/interfaces/leitor';
import { LeitorPanelComponent } from "./leitor-panel/leitor-panel.component";

@Component({
  selector: 'app-leitores',
  standalone: true,
  imports: [LeitorPanelComponent],
  templateUrl: './leitores.component.html',
  styleUrl: './leitores.component.scss'
})
export class LeitoresComponent {
  qtdLeitores = signal<number>(0);

  ngOnInit(): void {
    this.qtdLeitores.set(169); 
  }

  leitores: Leitor[] = [
    {
      fullname: "Luana Paes",
      email: "luanapaes@ghotmail.com",
      phone_number: "8190909090",
      borrowed_book: [
        {
          book_name: "A menina que roubava livros",
          book_description: "Livro passado na guerra fria",
          loan_date: new Date("2025-07-20"),
          data_devolucao: new Date("2025-07-27")
        },
        {
          book_name: "A menina que roubava pneus",
          book_description: "Livro passado na guerra fria",
          loan_date: new Date("2025-07-20"),
          data_devolucao: new Date("2025-07-27")
        },
      ]
    },
    {
      fullname: "Vinicius Santana",
      email: "vinicius.sapdeveloper@sap.br",
      phone_number: "8198989898",
      borrowed_book: [
        {
          book_name: "Sap para iniciantes",
          book_description: "Guia completo do sistema SAP",
          loan_date: new Date("2025-07-20"),
          data_devolucao: new Date("2025-07-27")
        }
      ]
    },
    {
      fullname: "Jamilli Paes",
      email: "jam_pedagogia@gmail.com",
      phone_number: "8145656578",
      borrowed_book: [
        {
          book_name: "Pedagogia para autistas",
          book_description: "Aprenda como lidar com esses alunos de forma inclusiva.",
          loan_date: new Date("2025-07-20"),
          data_devolucao: new Date("2025-07-27")
        },
        {
          book_name: "Pedagogia na pática",
          book_description: "Tudo sobre o curso de pedagogia, do conceito à aplicação.",
          loan_date: new Date("2025-07-20"),
          data_devolucao: new Date("2025-07-27")
        },
      ]
    },
    {
      fullname: "Jamilli Paes",
      email: "jam_pedagogia@gmail.com",
      phone_number: "8145656578",
      borrowed_book: [
        {
          book_name: "Pedagogia para autistas",
          book_description: "Aprenda como lidar com esses alunos de forma inclusiva.",
          loan_date: new Date("2025-07-20"),
          data_devolucao: new Date("2025-07-27")
        },
        {
          book_name: "Pedagogia na pática",
          book_description: "Tudo sobre o curso de pedagogia, do conceito à aplicação.",
          loan_date: new Date("2025-07-20"),
          data_devolucao: new Date("2025-07-27")

        },
      ]
    },
  ];
}
