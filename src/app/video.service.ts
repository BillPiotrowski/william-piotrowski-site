import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


// This service is probably more of a visual / all-encompassing service as it applies to
// both video and static images.


export class VideoService {

  private _source:string = "";
  private _imageURL: string = "";

  private _videoPlayer?: HTMLVideoElement // = new HTMLVideoElement();
  private _backgroundElement?: HTMLElement

  private _isEnabled: boolean = true;
  public get isEnabled(): boolean {
    return this._isEnabled
  }

  public setVideoPlayer(player: HTMLVideoElement, background: HTMLElement){
    this._videoPlayer = player;
    this._backgroundElement = background
    this.setDefaults();
  }

  private setDefaults(){
    if (this._videoPlayer) {
      this._videoPlayer.loop = true;
    }
  }
  
public get imageURL(){
  return this._imageURL
}
public set imageURL(val){
  this._imageURL = val
}

  public get source() {
      return this._source;
  }
  public set source(value) {
    console.log(`SET VID: ${value}.`)
      if (this._source !== value) {
          this._source = value;
          // if (!this._isEnabled){
          //   return
          // }
          
      }
      // console.log(value)
      if (this._source === ""){
        console.log("SHOULD BE STATIC!!!")
        if(this._videoPlayer){
          this._videoPlayer.pause()
        }
        this.makeStatic()
      } else if(this._isEnabled) {
        // if(this._videoPlayer){
            // Using fetch instead of letting video player set source because it seems better for caching:
            // https://stackoverflow.com/questions/52220696/how-to-cache-mp4-video-for-the-html-video-tag
            const videoRequest = fetch(value)
              .then(response => response.blob());

            videoRequest.then(blob => {
              if(this._videoPlayer && this._isEnabled){
                this.makeDynamic();
                // video.src = window.URL.createObjectURL(blob);
                this._videoPlayer.src = window.URL.createObjectURL(blob);
              }
            }); 
            // this._videoPlayer.src = value
          // } else {

          //   console.log("VID PLAYER BAD.")
          // }
        if(this._videoPlayer){
          this._videoPlayer.play()
        }
      }
  }

  


  private enableVideo(){
    if (this._videoPlayer && this.source != ""){
      this._videoPlayer.src = this.source
      this._videoPlayer.play()
    }
    this.makeDynamic()
    
    // if (this.audioPlayer.src != this._source){
    //   this.audioPlayer.src = this._source
    // }
    // if (this._source == "") {
    //   return
    // }
    //       this.audioPlayer.play()
  }
  private disableVideo(){
    if (this._videoPlayer){
      this._videoPlayer.pause()
      this._videoPlayer.src = ""
    }
    this.makeStatic()
    // this.audioPlayer.pause()
    // this.source = "";
    // this.audioPlayer.src = this.source
  }

  private makeStatic(){
    if (this._backgroundElement){
      this._backgroundElement.classList.add('static');
    }
  }
  private makeDynamic(){
    if (this._backgroundElement){
      this._backgroundElement.classList.remove('static')
    }
  }

  public toggleEnable(){
    this._isEnabled = !this._isEnabled
    if (this.isEnabled) {
      this.enableVideo()
    }
    else {
      this.disableVideo()
    }
  }


  constructor() { }
}
