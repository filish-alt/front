import { Component, Input, OnInit } from '@angular/core';
import { hero } from '../hero';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: hero | undefined; 

  constructor() { }

  ngOnInit(): void {
  }

}
