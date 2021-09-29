import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-darklore-manor',
  templateUrl: './darklore-manor.component.html',
  styleUrls: ['./darklore-manor.component.css']
})
export class DarkloreManorComponent implements OnInit {

  constructor(
    private router: Router
  ) {

  }

  ngOnInit(): void {
    const href = this.router.url
    console.log(`current url: ${href}`);
  }

}
