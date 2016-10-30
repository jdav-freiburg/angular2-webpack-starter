import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { NoContentComponent } from './no-content';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        HomeComponent,
        NoContentComponent,
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
    ]
})
export class AppModule {
}

