import { Component, Injectable, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { GlobalNavComponent } from './global-nav/global-nav.component';
import { Router, Event, NavigationStart, RouterOutlet, ActivationEnd, ActivationStart, NavigationEnd } from '@angular/router';
import { slideInAnimation } from './animations'
import { AudioService } from './audio.service';
import { VideoService } from './video.service';
import assetURLS from './asset-urls.json'; 


// const config = require("./config.json");

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideInAnimation
  ]
})

@Injectable({
  providedIn: 'root',
})


export class AppComponent {

  // @ViewChild('myname') input:ElementRef; 
  
  // @ViewChildren('div1,div2,div3') divs:QueryList<ElementRef>;
  
  // ngAfterViewInit() {
  //   console.log(this.input.nativeElement.value);
  //   console.debug(this.divs); 
  // }
  // @ViewChild('child') child: GlobalNavComponent;
  routeHidden = true;
  // public wonders: WonderModel[] = [];
  // public videoSource: string = "/assets/video/opening-title-01.mp4"

  // private audioEnabled: boolean = false;

  // Users: any = assetURLS;

  public get isAudioEnabled(){
    return this.audioService.isEnabled
  }
  public get isVideoEnabled(){
    return this.videoService.isEnabled
  }
  // isAudioEnabled = function (){
  //   return this.videoService.isEnabled
  // }

  private prevURL?: string
  
  constructor(
    private router: Router,
    private audioService: AudioService,
    private videoService: VideoService
  ) { 
    console.log("assets:")
    console.log(assetURLS)
  }

  @ViewChild('videoPlayer') videoplayer: any;
  @ViewChild('staticBG') staticBackground: any;
  @ViewChild('container') container: any;

  ngOnInit() {
    this.router.events.subscribe( (e) => {
      if (e instanceof NavigationStart) {
        // console.log(this.videoplayer)
        if (e.url === "/") {
            this.routeHidden = false;
            
            console.log("hide nav")
        } else {
            this.routeHidden = true;
            console.log("show nav")
        }
      }
    })
    // Required for auto play in chrome
    // this.videoplayer.nativeElement.play();
  }

  ngAfterViewInit(){

    this.videoService.setVideoPlayer(this.videoplayer.nativeElement, this.staticBackground.nativeElement)
    this.router.events.subscribe( (e) => {
      // console.log(`nav event: ${e}`)
      if (e instanceof NavigationEnd) {
        const className = classNameFromURL(e.url)
        this.container.nativeElement.classList.add(className)
        this.prevURL = className
      }
      if (e instanceof NavigationStart) {


        if (this.prevURL){
          this.container.nativeElement.classList.remove(this.prevURL)
        }

        

        
        const urlAssets: any = assetURLS.urls.find(obj => obj.url == e.url)
        if (!urlAssets || urlAssets === null){
          return
        }
        const audioFileName = urlAssets['audio']
        const videoFileName = urlAssets['video']
        const bgImage = urlAssets['bg-image']

        if(audioFileName != null && audioFileName != ""){
          this.audioService.source = `/assets/audio/${audioFileName}`
        }
        else {
          this.audioService.source = ""
        }

        if(videoFileName != null && videoFileName != ""){
          this.videoService.source = `/assets/video/${videoFileName}`
        } else {
          this.videoService.source = ""
        }
        // if (bgImage && bgImage != ""){
        //   this.videoService.imageURL = `/assets/images/static-bg/${bgImage}`
        // } else {
        //   this.videoService.imageURL = `/assets/images/Skull_03.png`
        // }




      }



    })
  }
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }


  title = 'williamPiotrowski';

  toggleAudio() {
    this.audioService.toggleEnable()
  }
  toggleVideo(){
    this.videoService.toggleEnable()
  }

}


// Input is a string with leading '/'.
// Returns the name with first '/' removed.
// If page is root (home) returns string of "home" as name.
function classNameFromURL(url:string):string {
  const className = url.slice(1);
  if (className === ""){
    return "home"
  } else {
    return className
  }
}