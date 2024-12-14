import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    HeroesRoutingModule
  ],
  providers: [
    provideHttpClient()
  ]

})
export class HeroesModule { }
