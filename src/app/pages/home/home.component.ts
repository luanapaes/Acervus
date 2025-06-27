import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/components/header/header.component";
import { BookCardComponent } from '../../shared/components/book-card/book-card.component';
import { CustomBook } from '../../shared/interfaces/custom-book';
import { EventCarouselComponent } from "../../shared/components/event-carousel/event-carousel.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, BookCardComponent, EventCarouselComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  bookArray: CustomBook[] = [
    {
      name: "Biblioteca da Meia-Noite",
      description: "Livro de ficção científica que traz valiosas lições sobre escolhas.",
      image_url: "https://m.media-amazon.com/images/I/81iqH8dpjuL.jpg"
    },
    {
      name: "Bibliotecaria Louca",
      description: "Livro de ficção científica que traz valiosas lições sobre escolhas.",
      image_url: "https://m.media-amazon.com/images/I/81iqH8dpjuL.jpg"
    },
    {
      name: "Biblioteca do Meio-Dia",
      description: "Livro de ficção científica que traz valiosas lições sobre escolhas.",
      image_url: "https://m.media-amazon.com/images/I/81iqH8dpjuL.jpg"
    },
    {
      name: "Biblioteca da Meia-Noite",
      description: "Livro de ficção científica que traz valiosas lições sobre escolhas.",
      image_url: "https://m.media-amazon.com/images/I/81iqH8dpjuL.jpg"
    },
    {
      name: "Bibliotecaria Louca",
      description: "Livro de ficção científica que traz valiosas lições sobre escolhas.",
      image_url: "https://m.media-amazon.com/images/I/81iqH8dpjuL.jpg"
    },
    {
      name: "Biblioteca do Meio-Dia",
      description: "Livro de ficção científica que traz valiosas lições sobre escolhas.",
      image_url: "https://m.media-amazon.com/images/I/81iqH8dpjuL.jpg"
    }
  ]

}
