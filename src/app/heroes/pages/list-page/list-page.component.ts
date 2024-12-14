import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { Hero, Publisher } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './list-page.component.html',
  styles: ``
})
export class ListPageComponent {
   defaultHero: Hero = {
    id: 1,
    name: 'Hero',
    publisher: Publisher.DCComics,
    alterEgo: 'Alter Ego',
    firstAppearance: 'First Appearance',
    characters: ['Character 1', 'Character 2'],
  }
}
