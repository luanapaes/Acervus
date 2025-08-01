import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title',
  standalone: true
})
export class TitlePipe implements PipeTransform {
  //pipe utilizado para padronizar o titulo na convenção de titulo de livros.
  // recebe o título, e "quebra" o título em palavras
  // faz a verificação se a palavra está entre as excecões
  // se for uma exceção (a, o, que etc) e não for a primeira palavra do título +
  // + mantém minúsculo, caso contrário transforma a letra para maiúsculo.
  transform(title: string){
    const execoes = ['a', 'o', 'as', 'os', 'um', 'uma', 'uns', 'umas', 'de', 'do', 'da', 'dos', 'das', 'em', 'no', 'na', 'nos', 'nas', 'por', 'para', 'com', 'sem', 'que', 'e'];

    return title.toLowerCase()
    .split(' ')
    .map((palavra, index) => {
      console.log(palavra, index)
      if (index === 0 || !execoes.includes(palavra)){
        console.log(palavra.charAt(0), palavra.slice(1), !execoes.includes(palavra))
        return palavra.charAt(0).toUpperCase() + palavra.slice(1);
      } else{
        return palavra;
      }
    }).join(' ');
  }
}
