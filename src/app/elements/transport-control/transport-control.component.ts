import { Component, OnInit } from '@angular/core';
import { Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-transport-control',
  templateUrl: './transport-control.component.html',
  styleUrls: ['./transport-control.component.css']
})
export class TransportControlComponent implements OnInit {
  @Output() toggleAudioEvent = new EventEmitter<void>();
  @Output() toggleVideoEvent = new EventEmitter<void>();

  @Input() isAudioEnabled = false; // decorate the property with @Input()
  @Input() isVideoEnabled = true; // decorate the property with @Input()
  
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
