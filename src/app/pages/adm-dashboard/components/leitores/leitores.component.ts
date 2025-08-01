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
      nome_completo: "Luana Paes",
      email: "luanapaes@ghotmail.com",
      numero_contato: "8190909090",
      livros_emprestados: [
        {
          nome: "A menina que roubava livros",
          descricao: "Livro passado na guerra fria",
          data_emprestimo: new Date("2025-07-20"),
          data_devolucao: new Date("2025-07-27")
        },
        {
          nome: "A menina que roubava pneus",
          descricao: "Livro passado na guerra fria",
          data_emprestimo: new Date("2025-07-20"),
          data_devolucao: new Date("2025-07-27")
        },
      ]
    },
    {
      nome_completo: "Vinicius Santana",
      email: "vinicius.sapdeveloper@sap.br",
      numero_contato: "8198989898",
      livros_emprestados: [
        {
          nome: "Sap para iniciantes",
          descricao: "Guia completo do sistema SAP",
          data_emprestimo: new Date("2025-07-20"),
          data_devolucao: new Date("2025-07-27")
        }
      ]
    },
    {
      nome_completo: "Jamilli Paes",
      email: "jam_pedagogia@gmail.com",
      numero_contato: "8145656578",
      livros_emprestados: [
        {
          nome: "Pedagogia para autistas",
          descricao: "Aprenda como lidar com esses alunos de forma inclusiva.",
          data_emprestimo: new Date("2025-07-20"),
          data_devolucao: new Date("2025-07-27")
        },
        {
          nome: "Pedagogia na pática",
          descricao: "Tudo sobre o curso de pedagogia, do conceito à aplicação.",
          data_emprestimo: new Date("2025-07-20"),
          data_devolucao: new Date("2025-07-27")
        },
      ]
    },
    {
      nome_completo: "Jamilli Paes",
      email: "jam_pedagogia@gmail.com",
      numero_contato: "8145656578",
      livros_emprestados: [
        {
          nome: "Pedagogia para autistas",
          descricao: "Aprenda como lidar com esses alunos de forma inclusiva.",
          data_emprestimo: new Date("2025-07-20"),
          data_devolucao: new Date("2025-07-27")
        },
        {
          nome: "Pedagogia na pática",
          descricao: "Tudo sobre o curso de pedagogia, do conceito à aplicação.",
          data_emprestimo: new Date("2025-07-20"),
          data_devolucao: new Date("2025-07-27")

        },
      ]
    },
  ];
}
