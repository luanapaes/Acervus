import { Component, Input } from '@angular/core';
import { Emprestimo } from '../../shared/interfaces/emprestimo';
import { EmprestimoCardComponent } from "../../shared/components/emprestimo-card/emprestimo-card.component";
import { CustomBook } from '../../shared/interfaces/custom-book';
import { BookCardComponent } from "../../shared/components/book-card/book-card.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { LogoutButtonComponent } from "../../shared/components/logout-button/logout-button.component";

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [EmprestimoCardComponent, BookCardComponent, FooterComponent, LogoutButtonComponent],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.scss'
})
export class UserDashboardComponent {
  @Input() usernome: string = "";
  booksPaginados: CustomBook[] = [];
  paginaAtual: number = 1;


  ngOnInit() {
    this.ordenarEmprestimos();
    this.atualizarPagina()
  }

  arrayEmprestimos: Emprestimo[] = [
    {
      nome: "Biblioteca da Meia-Noite",
      data_emprestimo: new Date("2025-06-5")
    },
    {
      nome: "É Assim que Acaba",
      data_emprestimo: new Date("2025-06-24")
    },
    {
      nome: "Coraline",
      data_emprestimo: new Date("2025-06-21")
    }
  ];

  ordenarEmprestimos() {
    const hoje = new Date();

    // ordena do mais antigo ao mais recente
    this.arrayEmprestimos.sort((a, b) => {
      const finalA = this.getDataFinal(new Date(a.data_emprestimo));
      const finalB = this.getDataFinal(new Date(b.data_emprestimo));

      const diasA = this.getDiasRestantes(finalA, hoje);
      const diasB = this.getDiasRestantes(finalB, hoje);

      // os vencidos
      if (diasA < 0 && diasB >= 0) return -1;
      if (diasB < 0 && diasA >= 0) return 1;

      // ultimo dia para devolver
      if (diasA === 0 && diasB !== 0) return -1;
      if (diasB === 0 && diasA !== 0) return 1;

      // os que restaram que são os que estão em dia
      return diasA - diasB;
    });
  }

  // a diferença dessas funções para as funções do EmprestimoCard.ts
  // é que neste componente elas recebem parâmetros
  getDataFinal(dataInicio: Date): Date {
    return new Date(dataInicio.getTime() + 7 * 24 * 60 * 60 * 1000);
  }

  getDiasRestantes(dataFinal: Date, hoje: Date): number {
    const diffMs = dataFinal.getTime() - hoje.getTime();
    return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
  }

  bookArray: CustomBook[] = [
    {
      nome: "Biblioteca da Meia-Noite",
      descricao: "Livro de ficção científica que traz valiosas lições sobre escolhas.",
      url_imagem: "https://m.media-amazon.com/images/I/81iqH8dpjuL.jpg"
    },
    {
      nome: "Bibliotecaria Louca",
      descricao: "Livro de ficção científica que traz valiosas lições sobre escolhas.",
      url_imagem: "https://m.media-amazon.com/images/I/81iqH8dpjuL.jpg"
    },
    {
      nome: "Biblioteca do Meio-Dia",
      descricao: "Livro de ficção científica que traz valiosas lições sobre escolhas.",
      url_imagem: "https://m.media-amazon.com/images/I/81iqH8dpjuL.jpg"
    },
    {
      nome: "Biblioteca da Meia-Noite",
      descricao: "Livro de ficção científica que traz valiosas lições sobre escolhas.",
      url_imagem: "https://m.media-amazon.com/images/I/81iqH8dpjuL.jpg"
    },
    {
      nome: "Bibliotecaria Louca",
      descricao: "Livro de ficção científica que traz valiosas lições sobre escolhas.",
      url_imagem: "https://m.media-amazon.com/images/I/81iqH8dpjuL.jpg"
    },
    {
      nome: "Bibliotecaria Louca",
      descricao: "Livro de ficção científica que traz valiosas lições sobre escolhas.",
      url_imagem: "https://m.media-amazon.com/images/I/81iqH8dpjuL.jpg"
    },
    {
      nome: "Biblioteca do Meio-Dia",
      descricao: "Livro de ficção científica que traz valiosas lições sobre escolhas.",
      url_imagem: "https://m.media-amazon.com/images/I/81iqH8dpjuL.jpg"
    }
  ];

  listItems(items: CustomBook[], pageActual: number, limitItems: number) {
    let result: any = [];
    let totalPage = Math.ceil(items.length / limitItems);
    let count = (pageActual * limitItems) - limitItems;
    let delimiter = count + limitItems;

    if (pageActual <= totalPage) {
      for (let i = count; i < delimiter; i++) {
        result.push(items[i]);
        count++;
      }
    }

    return result
  }

  atualizarPagina() {
    this.booksPaginados = this.listItems(this.bookArray, this.paginaAtual, this.limitPorPagina);
  }  

  limitPorPagina = 6;
  totalPaginas = Math.ceil(this.bookArray.length / this.limitPorPagina);

  avancarPagina() {
    if (this.paginaAtual < this.totalPaginas) {
      this.paginaAtual++;
      this.atualizarPagina();
    }
  }

  voltarPagina() {
    if (this.paginaAtual > 1) {
      this.paginaAtual--;
      this.atualizarPagina();
    }
  }

}
