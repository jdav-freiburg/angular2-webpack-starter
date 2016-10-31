import { Routes } from '@angular/router';
import { NoContentComponent } from './components/no-content/no-content.component';
import { HomeComponent } from './components/home/home.component';
import { ItemsComponent } from './components/admin/items/items.component';
import { AuthAdminGuard } from './services/guards/auth-admin-guard.service';
import { RegisterComponent } from './components/user/register/register.component';
import { LoginComponent } from './components/user/login/login.component';
import { AuthGuard } from './services/guards/auth-guard.service';
import { NoAccessComponent } from './components/no-access/no-access.component';
import { RegisteredGuard } from './services/guards/registered-guard.service';
import { LoginGuard } from './services/guards/login-guard.service';

export const ROUTES: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },

    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard, RegisteredGuard]
    },

    {
        path: 'login',
        component: LoginComponent,
        canActivate: [LoginGuard]
    },

    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [AuthGuard]
    },

    {
        path: 'admin/items',
        component: ItemsComponent,
        canActivate: [AuthGuard, AuthAdminGuard]
    },

    {
        path: 'no-access',
        component: NoAccessComponent,
        canActivate: [AuthGuard]
    },

    {path: '**', component: NoContentComponent},
];
