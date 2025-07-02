import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/components/header/header.component";
import { LeftSidebarComponent } from "./left-sidebar/left-sidebar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-adm-dashboard',
  standalone: true,
  imports: [HeaderComponent, LeftSidebarComponent, RouterOutlet],
  templateUrl: './adm-dashboard.component.html',
  styleUrl: './adm-dashboard.component.scss'
})
export class AdmDashboardComponent {

}
