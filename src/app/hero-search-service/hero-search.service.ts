import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Hero } from '../hero-class';

@Injectable()
export class HeroSearchService {

    constructor(
        private http: Http
    ) {

    }

    search(term: string): Observable<Hero[]> {
        return this.http
            .get(`app/heroes/?name=${term}`)
            .map((response: Response) => response.json().data as Hero[]);
    }

}

