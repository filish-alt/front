import { Injectable } from '@angular/core';
import { hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageseservice : MessageService) { }

  getheros() : Observable<hero[]>{
  
 
    this.messageseservice.add('HeroService : heros are fetched');

    return of (HEROES); 
  }
}
