import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../hero-class';
import { HeroService } from '../hero-service';

@Component({
    moduleId: module.id,
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

    heroes: Hero[];
    selectedHero: Hero;

    hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };

    constructor(
        private router: Router,
        private heroService: HeroService
    ) {

    }

    getHeroes(): void {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1,5));

    }

    gotoDetail(hero: Hero): void {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }

    ngOnInit(): void {
        this.getHeroes();
    }

    onSelect(hero: Hero): void {
        console.log("onSelect click routine hero.name=" + hero.name);

        this.selectedHero = hero;
    }

}
