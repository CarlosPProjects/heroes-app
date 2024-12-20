import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './list-page.component.html',
  styles: ``
})
export class ListPageComponent implements OnInit {
  public heroes: Hero[] = [];

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.heroesService.getHeroes()
      .subscribe(heroes => {
        this.heroes = heroes;
      });
  }
}
