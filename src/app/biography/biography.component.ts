import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.css'],

  // animations: [
  //   trigger('bioOpenClose', [
  //     // ...
  //     state('open', style({
  //       // height: '3em',
  //       // opacity: 1,
  //       // backgroundColor: 'yellow',
  //       right: '0'
  //     })),
  //     state('closed', style({
  //       // height: '0px',
  //       // opacity: 0.8,
  //       // backgroundColor: '#c6ecff',
  //       right: '-40%'
  //     })),
  //     transition('open => closed', [
  //       animate('0.1s')
  //     ]),
  //     transition('closed => open', [
  //       animate('0.5s')
  //     ]),
  //   ]),
  // ],
})
export class BiographyComponent implements OnInit {

  // isBiographyOpen = false; // decorate the property with @Input()
  constructor() { }

  ngOnInit(): void {
    // this.isBiographyOpen = true
  }
  // ngAfterViewChecked(): void{
  //   this.isBiographyOpen = true
  // }

}
