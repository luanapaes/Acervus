import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/components/header/header.component";
import { BookCardComponent } from '../../shared/components/book-card/book-card.component';
import { CustomBook } from '../../shared/interfaces/custom-book';
import { EventCarouselComponent } from "../../shared/components/event-carousel/event-carousel.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, BookCardComponent, EventCarouselComponent, FooterComponent,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
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
      nome: "Biblioteca do Meio-Dia",
      descricao: "Livro de ficção científica que traz valiosas lições sobre escolhas.",
      url_imagem: "https://m.media-amazon.com/images/I/81iqH8dpjuL.jpg"
    }
  ]

}
