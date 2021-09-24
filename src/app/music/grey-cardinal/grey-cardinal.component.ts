import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grey-cardinal',
  templateUrl: './grey-cardinal.component.html',
  styleUrls: ['./grey-cardinal.component.css']
})
export class GreyCardinalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    // audioPlayer.play()
    // audioPlayer.loop = true
  }
  ngOnDestroy(){
    console.log("DESTROY")
    audioPlayer.pause()

  }
  

}

const audioPlayer: HTMLAudioElement = new Audio('/assets/audio/grey-cardinal.mp3')
