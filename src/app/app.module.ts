import { AngularFireModule } from 'angularfire2';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { NoContentComponent } from './components/no-content/no-content.component';
import { NoAccessComponent } from './components/no-access/no-access.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ItemsComponent, ItemsSavedMessageComponent } from './components/admin/items';
import { AuthService } from './services/auth.service';
import { ItemService } from './services/item.service';
import { UserService } from './services/user.service';
import { UserAuthStatusService } from './services/user-auth-status.service';
import { AdminUserGuard } from './services/guards/admin-user-guard.service';
import { AuthGuard } from './services/guards/auth-guard.service';
import { StandardUserGuard } from './services/guards/standard-user-guard.service';
import { LoginGuard } from './services/guards/login-guard.service';
import { LoadingComponent } from './components/loading/loading.component';
import { AlreadyRegisteredGuard } from './services/guards/already-registered-guard.service';
import { ItemFilterPipe } from './pipes/item-filter.pipe';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { InfoMessageComponent } from './components/info-message/info-message.component';
import { MaterialModule } from '@angular/material';

export const GUARDS = [
    AuthGuard,
    LoginGuard,
    StandardUserGuard,
    AlreadyRegisteredGuard,
    AdminUserGuard
];

export const SERVICES = [
    AuthService,
    UserService,
    UserAuthStatusService,
    ItemService
];

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        NoContentComponent,
        HomeComponent,
        ItemsComponent,
        HeaderComponent,
        RegisterComponent,
        LoginComponent,
        NoAccessComponent,
        LoadingComponent,
        ItemFilterPipe,
        NavBarComponent,
        InfoMessageComponent,
        ItemsSavedMessageComponent,
    ],
    entryComponents: [
        ItemsSavedMessageComponent,
    ],
    imports: [
        // https://github.com/angular/angularfire2
        AngularFireModule.initializeApp({
            apiKey: 'AIzaSyAh1HzWeBkI8VmscctkxRzZNI6TQWOJFZk',
            authDomain: 'test-6b408.firebaseapp.com',
            databaseURL: 'https://test-6b408.firebaseio.com',
            storageBucket: 'test-6b408.appspot.com'
        }),
        // https://github.com/angular/material2
        MaterialModule.forRoot(),
        // angular core
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(ROUTES, {useHash: true})
    ],
    providers: [
        ENV_PROVIDERS,
        ...GUARDS,
        ...SERVICES
    ]
})
export class AppModule {
}

