import { Component, Input } from '@angular/core';
import { Emprestimo } from '../../shared/interfaces/emprestimo';
import { EmprestimoCardComponent } from "../../shared/components/emprestimo-card/emprestimo-card.component";

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [EmprestimoCardComponent],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.scss'
})
export class UserDashboardComponent {
  @Input() username: string = "";

  ngOnInit() {
    this.ordenarEmprestimos();
  }
  

  arrayEmprestimos: Emprestimo[] = [
    {
      book_name: "Biblioteca da Meia-Noite",
      data_emprestimo: new Date("2025-06-5")
    },
    {
      book_name: "É Assim que Acaba",
      data_emprestimo: new Date("2025-06-24")
    },
    {
      book_name: "Coraline",
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
  
}
