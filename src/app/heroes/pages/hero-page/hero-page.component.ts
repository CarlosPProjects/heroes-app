import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/hero.interface';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-hero-page',
  standalone: true,
  imports: [],
  templateUrl: './hero-page.component.html',
  styles: ``
})
export class HeroPageComponent implements OnInit {

  public hero: Hero | undefined;

  constructor(private heroesService: HeroesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap(({ id }) => this.heroesService.getHeroById(id))
    ).subscribe(hero => this.hero = hero);
  }

}
