import { Component, Input, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';


@Component({
  selector: 'app-global-nav',
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '3em',
        top: '0'
        // opacity: 1,
        // backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '0px',
        top: '-3.75rem'
        // opacity: 0.8,
        // backgroundColor: '#c6ecff'
      })),
      transition('open => closed', [
        animate('0.6s ease-out')
      ]),
      transition('closed => open', [
        animate('0.6s ease-in')
      ]),
    ]),
  ],
  templateUrl: './global-nav.component.html',
  styleUrls: ['./global-nav.component.css']
})


// export class GlobalNavComponent {
  export class GlobalNavComponent implements OnInit {

  @Input() isOpen = false; // decorate the property with @Input()

  toggle() {
    this.isOpen = !this.isOpen;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
