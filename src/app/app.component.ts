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
  
  constructor(
    private router: Router,
    private audioService: AudioService
  ) { 

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
        const audioSrc = this.audioService.source
        if (e.url === "/grey-cardinal" && audioSrc != "http://localhost:4200/assets/audio/grey-cardinal.mp3") {
          this.audioService.source = "http://localhost:4200/assets/audio/grey-cardinal.mp3"
        // this.audioService.audioPlayer.src = "http://localhost:4200/assets/audio/grey-cardinal.mp3"
          console.log("play Grey cardinal!")
          // this.audioService.audioPlayer.play()
          // this.videoplayer.nativeElement.loop = true
        }
        else {
          console.log("stop the music!")
          this.audioService.source = ""
          // this.audioService.audioPlayer.src = ""
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

