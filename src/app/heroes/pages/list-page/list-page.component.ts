import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './list-page.component.html',
  styles: ``
})
export class ListPageComponent {
  public defaultHero: Hero = {
    id: 1,
    name: 'Hero',
    publisher: Publisher.DCComics,
    alterEgo: 'Alter Ego',
    firstAppearance: 'First Appearance',
    characters: ['Character 1', 'Character 2'],
  }

  constructor(private heroesService: HeroesService) { }

  get heroes() : Hero[] {
    return this.heroesService.heroes;
  }

}
