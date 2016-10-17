import { Injectable } from '@angular/core';

import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from '../hero-class';
import { HEROES } from '../mock-heroes';

@Injectable()
export class HeroService {

    private DataSource = 'HttpData'; // or 'MockData' or 'MockDataSlowly'

    private heroesUrl = 'app/heroes';  // URL to web api

    private headers = new Headers({'Content-Type': 'application/json'});

    constructor (private http:Http) {

    }

    getHero(id: number): Promise<Hero> {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
    }

    getHeroes(): Promise<Hero[]> {
        if (this.DataSource == 'MockData') {
            return Promise.resolve(HEROES);
        }
        if (this.DataSource == 'MockDataSlowly') {
            return new Promise<Hero[]>(resolve =>
                setTimeout(resolve, 2000)) // delay 2 seconds
                .then(() => Promise.resolve(HEROES));
        }
        if (this.DataSource == 'HttpData') {
            return this.http.get(this.heroesUrl)
                .toPromise()
                .then(response => response.json().data as Hero[])
                .catch(this.handleError);
        }
    }

    create(name: string): Promise<Hero> {
        return this.http
            .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    update(hero: Hero): Promise<Hero> {
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http
            .put(url, JSON.stringify(hero), {headers: this.headers})
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An Error occurred', error);
        return Promise.reject(error.message || error);
    }

}
