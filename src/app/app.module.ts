import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import { InMemoryDataService }  from './in-memory-service';

// Import the RXJS extensions
import './rxjs-extensions';

// App is our top level component
import { AppComponent } from './app.component';
import { App_NavbarComponent } from './common/app_navbar';
import { App_HeaderComponent } from './common/app_header';
import { App_FooterComponent } from './common/app_footer';
import { HeroService } from './hero-service';
import { HeroDetailComponent } from './hero-detail';
import { HeroesListComponent } from './heroes-list';
import { DashboardComponent } from './dashboard';
import { HeroSearchService } from './hero-search-service';
import { HeroSearchComponent } from './hero-search-component';

import { AppRoutingModule } from './app-routing.module';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        App_NavbarComponent,
        App_HeaderComponent,
        App_FooterComponent,
        HeroDetailComponent,
        HeroesListComponent,
        DashboardComponent,
        HeroSearchComponent
    ],
    providers: [
        HeroService,
        HeroSearchService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
