import { Routes } from '@angular/router';
import { NoContentComponent } from './no-content';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './admin/items';
import { AuthAdminGuard } from './services/guards/auth-admin-guard.service';

export const ROUTES: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },

    {path: 'home', component: HomeComponent},

    {
        path: 'admin/items',
        component: ItemsComponent,
        canActivate: [AuthAdminGuard]
    },

    {path: '**', component: NoContentComponent},
];
