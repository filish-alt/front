import { Component, OnInit } from '@angular/core';
import { hero} from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service'; 
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
    heroes!: hero[];
   selectedHero: hero | undefined;
 
  constructor(private heroservice : HeroService, private messageService: MessageService) {
      
   }

  
  ngOnInit():
  
    void {
    this.heroservice.getheros().subscribe(val =>
      {
        this.heroes = val; 
      })
  }
  onSelect(heros: hero):void{
   this.selectedHero = heros;
   this.messageService.add(`HeroesComponent: Selected hero id=${heros.id}`);
 

  }
  getHeroes(): void {
    this.heroservice.getheros()
        .subscribe(heroes => this.heroes = heroes);
   } 
  }