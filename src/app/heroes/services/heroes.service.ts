import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment.development';
import { Hero } from '../interfaces/hero.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  public heroes: Hero[] = [];

  private ENDPOINT: string = environment.ENDPOINT;

  constructor(private http: HttpClient) { }

  private getHeroes(): void {
    this.http
      .get<Hero[]>(this.ENDPOINT)
      .subscribe((data: Hero[]) => {
        this.heroes = data;
      })
  }
}