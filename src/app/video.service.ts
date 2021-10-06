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

  // Sets source to new value.
  // If it is a new value and video is enabled, will attempt to:
  //  - download file,
  //  - set file as video source, and;
  //  - play video
  //
  // Should thie become a method and return a Promise??
  public set source(value) {

    // guard that source value is new
    // Should it also verify that the _videoPlayer.src === value ?
    if (this._source !== value) {
        this._source = value;
    }
    else {
      return
    }
      
    // guard that source is not empty value
    if (this._source === ""){
      if(this._videoPlayer){
        this._videoPlayer.pause()
      }
      this.makeStatic()
      return
    }
    
    
    if(this._isEnabled) {

      // this.makeStatic()

      // Using fetch instead of letting video player set source because it seems better for caching:
      // https://stackoverflow.com/questions/52220696/how-to-cache-mp4-video-for-the-html-video-tag
      const videoRequest = fetch(value)
        .then(response => response.blob());

      videoRequest.then(blob => {
        if(
          // _videoPlayer exists
          this._videoPlayer &&

          // video is enabled
          this._isEnabled &&

          // source still matches the value sent when method was called.
          this.source === value
        ){
          // this.makeDynamic();
          this._videoPlayer.src = window.URL.createObjectURL(blob);

          // Better place to put play method call?
          // Handle Promise
          this.play();
        }
      }); 
    }
  }

  // Attempts to play video. Returns Promise.
  private play(): Promise<void> {
    if (this._videoPlayer){
      this._videoPlayer.muted = true
      return this._videoPlayer.play()
      // const promise = this._videoPlayer.play()
      // if(promise !== undefined){
      //     promise.then(() => {
      //         // Autoplay started
      //     }).catch(error => {
      //       console.log("Play failure")
      //         // Autoplay was prevented.
      //     });
      // }
    }
    else {
      return Promise.reject("Could not play video because player does not exist.")
    }
  }

  // Pauses video if player exists.
  private pause(): void {
    if (this._videoPlayer){
      this._videoPlayer.muted = true
      
      // FUTURE: Add check to verify video is playing before pausing.
      return this._videoPlayer.pause()
    }
    else {
      return
      // No promise to return error.
      // return Promise.reject("Could not pause video because player does not exist.")
    }
  }
  


  private enableVideo(){
    if (this._videoPlayer && this.source != ""){
      this._videoPlayer.src = this.source
      // this._videoPlayer.play()

      // Handle promise
      this.play()
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


  constructor() {
  }
}
