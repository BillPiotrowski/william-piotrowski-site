import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-transport-control',
  templateUrl: './transport-control.component.html',
  styleUrls: ['./transport-control.component.css']
})
export class TransportControlComponent implements OnInit {
  @Output() toggleAudioEvent = new EventEmitter<void>();
  @Output() toggleVideoEvent = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  toggleAudio() {
    this.toggleAudioEvent.emit();
  }
  toggleVideo() {
    this.toggleVideoEvent.emit();
  }

}
