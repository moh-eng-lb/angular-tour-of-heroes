import {Component, OnInit} from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes : Hero[] = []
  selectedHero?: Hero;

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  getHeros(): void {
    this.heroes = this.heroservice.getHeros();
  }

  constructor(private heroservice: HeroService) {
  }

  ngOnInit(): void {
    this.getHeros();
  }

}
