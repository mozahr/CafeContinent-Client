import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-our-coffe',
  templateUrl: './our-coffe.component.html',
  styleUrls: ['./our-coffe.component.scss'],
  animations: [
    trigger('pageAnimations', [
      transition(':enter', [
        query('.hero, form', [
          style({opacity: 0, transform: 'translateY(-100px)'}),
          stagger(-30, [
            animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
          ])
        ])
      ])
    ]),
  ]
})
export class OurCoffeComponent implements OnInit {
  continent: string;
  links = [
  {"route":"/ourcoffe/africa","text":"Afrique"},
  {"route":"/ourcoffe/northamerica","text":"Amérique du Nord"},
  {"route":"/ourcoffe/centralamerica","text":"Amérique Centrale"},
  {"route":"/ourcoffe/southamerica","text":"Amérique du Sud"},
  {"route":"/ourcoffe/asia","text":"Asie"}

];
  constructor(_activatedRoute: ActivatedRoute) {
    
    _activatedRoute.params.subscribe(c => {

      this.continent = c.continent;

    });
   
   }

  ngOnInit(): void {
  }

}
