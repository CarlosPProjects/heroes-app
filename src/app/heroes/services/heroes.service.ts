import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment.development';
import { Hero } from '../interfaces/hero.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private ENDPOINT: string = environment.ENDPOINT;

  constructor(private http: HttpClient) { }

  public getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.ENDPOINT);
  }

  public getHeroById(id: string): Observable<Hero> {
    return this.http.get<Hero>(`${this.ENDPOINT}/${id}`);
  }

  public createNewHero(hero: Hero): void {
    this.http.post(this.ENDPOINT, hero);
  }
}