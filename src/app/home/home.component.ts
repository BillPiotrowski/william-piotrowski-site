import { Component, OnInit } from '@angular/core';
import { animation, style, animate, trigger, transition, stagger, useAnimation, query, group, animateChild, sequence } from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('homeAnimations',[
      transition(':enter', [
        query('li#repertorium', [
          style({
            left: '-100%'
          })
        ]),
        query('li#biography', [
          style({
            top: '200%'
          })
        ]),
        query('li#correspond', [
          style({
            left: '200%'
          })
        ]),
        group([
          query(' li#repertorium',[
            animate(
              '0.6s ease-out',
              // style({ left: '0' })
            )
          ]),
          query(' li#biography',[
            animate(
              '0.4s ease-out',
              // style({ top: '0' })
            )
          ]),
          query(' li#correspond',[
            animate(
              '0.8s ease-out',
              // style({ left: '68.733850129198967%' })
            )
          ])
        
        ])
      ])
    ])
  ]
})

export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
