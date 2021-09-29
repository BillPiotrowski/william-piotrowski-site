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
    private audioService: AudioService
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
    this.videoplayer.nativeElement.play();
  }

  ngAfterViewInit(){

    this.router.events.subscribe( (e) => {
      if (e instanceof NavigationStart) {
        const vidSrc = this.videoplayer.nativeElement.src
        if (e.url === "/grey-cardinal" && vidSrc != "http://localhost:4200/assets/video/greyCardinal.mp4") {
          this.videoSource = "http://localhost:4200/assets/video/greyCardinal.mp4"
          this.videoplayer.nativeElement.loop = true
        } else if (e.url === "/darklore-manor" && vidSrc != "http://localhost:4200/assets/video/darklore-manor.mp4") {
          this.videoSource = "http://localhost:4200/assets/video/darklore-manor.mp4"
          this.videoplayer.nativeElement.loop = true
        }  else if (e.url === "/transylvania" && vidSrc != "http://localhost:4200/assets/video/transylvania.mp4") {
          this.videoSource = "http://localhost:4200/assets/video/transylvania.mp4"
          this.videoplayer.nativeElement.loop = true
        } else if (vidSrc != "http://localhost:4200/assets/video/home-bg-dark.mp4") {
          this.videoSource = "http://localhost:4200/assets/video/home-bg-dark.mp4"
        }
        // if (e.url === "/") {
        //     this.routeHidden = false;
            
        //     console.log("hide nav")
        // } else {
        //     this.routeHidden = true;
        //     console.log("show nav")
        // }

        // if(!this.audioService.isEnabled){ return }
    
        // const parsedURL = this.router.parseUrl(e.url)
        // console.log(`PARSED URL: ${parsedURL}. and url: ${e.url}`)
        const urlAssets: any = assetURLS.urls.find(obj => obj.url == e.url)
        if (urlAssets == null){
          return
        }
        const audioFileName = urlAssets['audio']
        if(audioFileName != null && urlAssets['audio'] != ""){
          this.audioService.source = `/assets/audio/${urlAssets['audio']}`
        }
        else {
          this.audioService.source = ""
        }




      }



    })
  }
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }


  title = 'williamPiotrowski';

  vidEnded() {
    // console.log("video ended");
    // console.log(this.videoSource)
    if (this.videoSource === "/assets/video/opening-title-01.mp4") {
      this.videoSource = "/assets/video/home-bg-dark.mp4"
      this.videoplayer.nativeElement.play();
      this.videoplayer.nativeElement.loop = true
    }
    // this.leavePage();
  }
  addItem() {
    this.audioService.toggleEnable()
  }

}

