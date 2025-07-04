import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { AdmDashboardComponent } from './pages/adm-dashboard/adm-dashboard.component';
import { ReadersComponent } from './pages/adm-dashboard/left-sidebar/components/readers/readers.component';

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
                component: ReadersComponent
            }
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
