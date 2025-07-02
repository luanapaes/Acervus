import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(router: Router, titleService: Title){
    router.events
    .pipe(filter((event) => event instanceof NavigationEnd))
    .subscribe((event: NavigationEnd | any) =>{
    console.log("URL ativa: ", event.url);

    switch (event.url) {
      case '':
        titleService.setTitle("Acervus");
        break;

      case '/login':
        titleService.setTitle("Faça Login");
        break;

      case '/userdashboard':
        titleService.setTitle("Área do Leitor");
        break;
      
      case '/admdashboard':
        titleService.setTitle("Área Adminstrativa");
        break;
    }
    })
  }
}
