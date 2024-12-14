import { Component, Input } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'hero-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styles: ``
})
export class CardComponent {
  @Input() hero!: Hero;
}