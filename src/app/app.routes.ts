import { Routes } from '@angular/router';
import { NoContentComponent } from './components/no-content/no-content.component';
import { HomeComponent } from './components/home/home.component';
import { ItemsComponent } from './components/admin/items/items.component';
import { AdminUserGuard } from './services/guards/admin-user-guard.service';
import { RegisterComponent } from './components/user/register/register.component';
import { LoginComponent } from './components/user/login/login.component';
import { AuthGuard } from './services/guards/auth-guard.service';
import { NoAccessComponent } from './components/no-access/no-access.component';
import { StandardUserGuard } from './services/guards/standard-user-guard.service';
import { LoginGuard } from './services/guards/login-guard.service';
import { AlreadyRegisteredGuard } from './services/guards/already-registered-guard.service';
import { NewReservationComponent } from './components/user/new-reservation/new-reservation.component';

export const ROUTES: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },

    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard, StandardUserGuard]
    },

    {
        path: 'reservation/new',
        component: NewReservationComponent,
        canActivate: [AuthGuard, StandardUserGuard]
    },

    {
        path: 'login',
        component: LoginComponent,
        canActivate: [LoginGuard]
    },

    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [AlreadyRegisteredGuard]
    },

    {
        path: 'admin/items',
        component: ItemsComponent,
        canActivate: [AuthGuard, AdminUserGuard]
    },

    {
        path: 'no-access',
        component: NoAccessComponent,
        canActivate: [AuthGuard]
    },

    {path: '**', component: NoContentComponent},
];
