import { Routes } from '@angular/router';
import { NoContentComponent } from './no-content';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './admin/items';

export const ROUTES: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },

    {path: 'home', component: HomeComponent},
    {path: 'admin/items', component: ItemsComponent},

    {path: '**', component: NoContentComponent},
];
