# angular2-docker-bootstrap4-webpack-tour-of-heroes

This git repository contains a version of the angular 2 tutorial
Tour of Heroes, based on Angular 2, Bootstrap 4, and using
Webpack as the build system

Please use node 6.0.0 and npm 3.10.8 or later to install
the dependencies

This version is based on:
```
angular: 2.1.0
bootstrap: 4.0.0-alpha.2
jquery: 2.2.3
```

The original tutorial is located here:
```
    https://angular.io/docs/ts/latest/tutorial/
```    

To build this project, download it from github:
```
    git clone https://github.com/scottnakada/angular2-bootstrap4-webpack-tour-of-heroes.git tour_of_heroes
    cd tour_of_heroes
    npm install
    npm start
```    
Open a browser window at localhost:3000
    
File/Component/Service Descriptions
===================================
```
index.html - the starting point for the project (includes <app></app>
    tag for the application

app/app.module.ts - declares the major dependencies for the project
app/app.component.ts - top level component for the project
app/app.component.html - top level application html, refers to
    app_navbar, app_header, router_outlet, and app_footer components
app/app-routing.ts - application routes
```

Components
==========
```
    app/common/app_navbar - navbar for the app
    app/common/app_header - header for the app
    app/common/app_footer - footer for the app
    
    app/hero-class - Hero data structure definition
    app/dashboard - Initial route/component displays first 4 heroes
        allows searching for heroes by name
    app/heroes-list - provides a list of all heroes.  Allows editing
        of the heroes name, adding a hero, or if a hero is selected,
        providing a link to get details of the hero
    app/hero-detail - provides a detailed description of a hero
    app/hero-search-component - provides hero searching capability used
        in the dashboard
    app/mock-heroes - an local data structure containing a list of
        heroes, used by th hero-service to initialize the heroes list
```

Services
========
```
    app/hero-service - provides a CRUD interface to heroes data.
    app/in-memory-service - provides a mock in-memory api for
        the heroes data.
```

Code Tree
=========
```
├── app
│   ├── app-routing.module.ts
│   ├── app.component.css
│   ├── app.component.html
│   ├── app.component.ts
│   ├── app.module.ts
│   ├── common
│   │   ├── app_footer
│   │   │   ├── app_footer.component.css
│   │   │   ├── app_footer.component.html
│   │   │   ├── app_footer.component.ts
│   │   │   └── index.ts
│   │   ├── app_header
│   │   │   ├── app_header.component.css
│   │   │   ├── app_header.component.html
│   │   │   ├── app_header.component.ts
│   │   │   └── index.ts
│   │   └── app_navbar
│   │       ├── app_navbar.component.css
│   │       ├── app_navbar.component.html
│   │       ├── app_navbar.component.ts
│   │       └── index.ts
│   ├── dashboard
│   │   ├── dashboard.component.css
│   │   ├── dashboard.component.html
│   │   ├── dashboard.component.ts
│   │   └── index.ts
│   ├── environment.ts
│   ├── hero-class
│   │   ├── hero.class.ts
│   │   └── index.ts
│   ├── hero-detail
│   │   ├── hero-detail.component.css
│   │   ├── hero-detail.component.html
│   │   ├── hero-detail.component.ts
│   │   └── index.ts
│   ├── hero-search-component
│   │   ├── hero-search.component.css
│   │   ├── hero-search.component.html
│   │   ├── hero-search.component.ts
│   │   └── index.ts
│   ├── hero-search-service
│   │   ├── hero-search.service.ts
│   │   └── index.ts
│   ├── hero-service
│   │   ├── hero.service.ts
│   │   └── index.ts
│   ├── heroes-list
│   │   ├── heroes-list.component.css
│   │   ├── heroes-list.component.html
│   │   ├── heroes-list.component.ts
│   │   └── index.ts
│   ├── in-memory-service
│   │   ├── in-memory.service.ts
│   │   └── index.ts
│   ├── index.ts
│   ├── mock-heroes
│   │   ├── index.ts
│   │   └── mock-heroes.ts
│   └── rxjs-extensions.ts
├── assets
│   └── img
│       └── app
│           └── angular.png
├── custom-typings.d.ts
├── index.html
├── main.browser.ts
├── polyfills.browser.ts
└── vendor.browser.ts
```
