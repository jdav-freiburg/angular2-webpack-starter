import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
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
import { ItemsComponent } from './components/admin/items/items.component';
import { AuthService } from './services/auth.service';
import { ItemService } from './services/item.service';
import { UserService } from './services/user.service';
import { AuthAdminGuard } from './services/guards/auth-admin-guard.service';
import { AuthGuard } from './services/guards/auth-guard.service';
import { RegisteredGuard } from './services/guards/registered-guard.service';
import { LoginGuard } from './services/guards/login-guard.service';

export const GUARDS = [
    AuthGuard,
    LoginGuard,
    RegisteredGuard,
    AuthAdminGuard
];

export const SERVICES = [
    AuthService,
    UserService,
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
        NoAccessComponent
    ],
    imports: [
        AngularFireModule.initializeApp({
                apiKey: 'AIzaSyAh1HzWeBkI8VmscctkxRzZNI6TQWOJFZk',
                authDomain: 'test-6b408.firebaseapp.com',
                databaseURL: 'https://test-6b408.firebaseio.com',
                storageBucket: 'test-6b408.appspot.com'
            },
            {
                provider: AuthProviders.Google,
                method: AuthMethods.Redirect
            }),
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

