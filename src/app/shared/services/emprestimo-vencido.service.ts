import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmprestimoVencidoService {
  taxa: number = 1.30;

  constructor() { }

  calcularDataDevolucao(dataInicial: Date) {
    return new Date(dataInicial.getTime() + 7 * 24 * 60 * 60 * 1000);
  }

  calcularDiasRestantes(dataInicial: Date) {
    const hoje = new Date();
    const dataDevolucao = this.calcularDataDevolucao(dataInicial);
    const diffMs = dataDevolucao.getTime() - hoje.getTime();
    return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
  }

  calcularTaxa(diasRestantes: number){
    return Math.abs(diasRestantes * this.taxa);
  }
}
