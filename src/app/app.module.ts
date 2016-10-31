import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { NoContentComponent } from './no-content';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './admin/items/items.component';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        NoContentComponent,
        HomeComponent,
        ItemsComponent
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

