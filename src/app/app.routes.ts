import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    }, 
    {
        path: "login",
        component: LoginComponent
    }, 
    {
        path: 'userdashboard',
        component: UserDashboardComponent
    }
];
