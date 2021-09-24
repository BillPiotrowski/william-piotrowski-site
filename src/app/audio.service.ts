import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})



export class AudioService {

  private _source:string = "";


  public get source() {
      return this._source;
  }
  public set source(value) {
      if (this._source !== value) {
          this._source = value;
          this.audioPlayer.src = value
          // this.emit('change:name', value); ????
      }
      console.log(value)
      if (this._source === ""){
        console.log("Stopping. No source.");
        this.audioPlayer.pause()
      // } else if (this.audioPlayer.read)
      } else if(this._isEnabled) {
        this.audioPlayer.play()
      }
  }
//   var isPlaying = function () {
//     return service.currentAudio
//         && service.currentAudio.currentTime > 0
//         && !service.currentAudio.paused
//         && !service.currentAudio.ended
//         && service.currentAudio.readyState > 2;
// }



  private audioPlayer: HTMLAudioElement = new Audio();
  // public isEnabled: boolean = false;

  private _isEnabled: boolean = false;
  public get isEnabled(): boolean {
    return this._isEnabled
  }


  constructor() {

    this.audioPlayer.loop = true;
  }

  public enableAudio(){
    if (this.audioPlayer.src != this._source){
      this.audioPlayer.src = this._source
    }
    if (this._source == "") {
      return
    }
      // this.audioService.source = "http://localhost:4200/assets/audio/grey-cardinal.mp3";
          // this.audioService.audioPlayer.src = this.audioService.source
          this.audioPlayer.play()
          // this.videoplayer.nativeElement.loop = true
        // }
        // else {
        //   console.log("no audio to play!")
        //   this.audioService.audioPlayer.src = ""
        // }
  }
  public disableAudio(){
    this.audioPlayer.pause()
    // this.source = "";
    this.audioPlayer.src = this.source
  }

  public toggleEnable(){
    this._isEnabled = !this._isEnabled
    if (this.isEnabled) {
      this.enableAudio()
    }
    else {
      this.disableAudio()
    }
  }
  
}
