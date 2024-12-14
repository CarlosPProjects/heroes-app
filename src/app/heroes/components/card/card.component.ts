import { Component, Input } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'hero-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styles: ``
})
export class CardComponent {
  @Input() hero!: Hero;

  constructor(private router: Router) {}

  public viewHeroDetails() {
    this.router.navigate(['/heroes/', this.hero.id]);
  }
}