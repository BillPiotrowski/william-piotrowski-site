import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})



export class VideoService {

  private _source:string = "";

  private _videoPlayer?: HTMLVideoElement // = new HTMLVideoElement();

  private _isEnabled: boolean = true;
  public get isEnabled(): boolean {
    return this._isEnabled
  }

  public setVideoPlayer(player: HTMLVideoElement){
    this._videoPlayer = player;
    this.setDefaults();
  }

  private setDefaults(){
    if (this._videoPlayer) {
      this._videoPlayer.loop = true;
    }
  }
  
  public get source() {
      return this._source;
  }
  public set source(value) {
      if (this._source !== value) {
          this._source = value;
          // if(this._videoPlayer){
            // Using fetch instead of letting video player set source because it seems better for caching:
            // https://stackoverflow.com/questions/52220696/how-to-cache-mp4-video-for-the-html-video-tag
            const videoRequest = fetch(value)
              .then(response => response.blob());

            videoRequest.then(blob => {
              if(this._videoPlayer){
                // video.src = window.URL.createObjectURL(blob);
                this._videoPlayer.src = window.URL.createObjectURL(blob);
              }
            }); 
            // this._videoPlayer.src = value
          // } else {

          //   console.log("VID PLAYER BAD.")
          // }
      }
      // console.log(value)
      if (this._source === ""){
        if(this._videoPlayer){
          this._videoPlayer.pause()
        }
      } else if(this._isEnabled) {
        if(this._videoPlayer){
          this._videoPlayer.play()
        }
      }
  }



  constructor() { }
}
