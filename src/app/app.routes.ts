import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { AdmDashboardComponent } from './pages/adm-dashboard/adm-dashboard.component';
import { LeitoresComponent } from './pages/adm-dashboard/components/leitores/leitores.component';
import { DashboardHomeComponent } from './pages/adm-dashboard/components/dashboard-home/dashboard-home.component';

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
        path: 'admdashboard',
        component: AdmDashboardComponent,
        children: [
            {
                path: 'leitores',
                component: LeitoresComponent
            }, 
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardHomeComponent },
        ]
    },
    {
        path: 'userdashboard',
        component: UserDashboardComponent,
    }, 
    { 
        path: '**', 
        redirectTo: '/',
        pathMatch: 'full'
     }
];
