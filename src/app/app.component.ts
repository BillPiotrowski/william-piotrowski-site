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
import { Router, Event, NavigationStart, RouterOutlet } from '@angular/router';
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
    // animation triggers go here
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
  public videoSource: string = "/assets/video/opening-title-01.mp4"

  // private audioEnabled: boolean = false;

  // Users: any = assetURLS;
  
  constructor(
    private router: Router,
    private audioService: AudioService,
    private videoService: VideoService
  ) { 
    console.log("assets:")
    console.log(assetURLS)
  }

    @ViewChild('videoPlayer') videoplayer: any;

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

    this.videoService.setVideoPlayer(this.videoplayer.nativeElement)
    this.router.events.subscribe( (e) => {
      if (e instanceof NavigationStart) {

        const urlAssets: any = assetURLS.urls.find(obj => obj.url == e.url)
        if (urlAssets == null){
          return
        }
        const audioFileName = urlAssets['audio']
        const videoFileName = urlAssets['video']

        if(audioFileName != null && audioFileName != ""){
          this.audioService.source = `/assets/audio/${audioFileName}`
        }
        else {
          this.audioService.source = ""
        }

        if(videoFileName != null && videoFileName != ""){
          this.videoService.source = `/assets/video/${videoFileName}`
        } else {
          this.videoService.source = "/assets/video/home-bg-dark.mp4"
        }




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

