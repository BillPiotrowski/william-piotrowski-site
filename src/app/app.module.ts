import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RepertoriumComponent } from './repertorium/repertorium.component';
import { BiographyComponent } from './biography/biography.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GlobalNavComponent } from './global-nav/global-nav.component';
import { GreyCardinalComponent } from './music/grey-cardinal/grey-cardinal.component';
import { TransportControlComponent } from './elements/transport-control/transport-control.component';
import { DarkloreManorComponent } from './music/darklore-manor/darklore-manor.component';
import { TransylvaniaComponent } from './music/transylvania/transylvania.component';
import { NecronomiconComponent } from './music/necronomicon/necronomicon.component';
import { LonesomeTownComponent } from './music/lonesome-town/lonesome-town.component';
import { WintersKnightComponent } from './music/winters-knight/winters-knight.component';
import { CarnivalOfLostSoulsComponent } from './music/carnival-of-lost-souls/carnival-of-lost-souls.component';
import { BloodOfTheDragonComponent } from './music/blood-of-the-dragon/blood-of-the-dragon.component';
import { PhantomsOfTheHighSeasComponent } from './music/phantoms-of-the-high-seas/phantoms-of-the-high-seas.component';
import { GrimmTalesComponent } from './music/grimm-tales/grimm-tales.component';
import { BloodOfAngelsComponent } from './music/blood-of-angels/blood-of-angels.component';
import { CrimsonWinterComponent } from './music/crimson-winter/crimson-winter.component';
import { YouCantPutYourArmsComponent } from './music/you-cant-put-your-arms/you-cant-put-your-arms.component';
import { ShadowOfTheRavenComponent } from './music/shadow-of-the-raven/shadow-of-the-raven.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RepertoriumComponent,
    BiographyComponent,
    ContactComponent,
    GlobalNavComponent,
    GreyCardinalComponent,
    TransportControlComponent,
    DarkloreManorComponent,
    TransylvaniaComponent,
    NecronomiconComponent,
    LonesomeTownComponent,
    WintersKnightComponent,
    CarnivalOfLostSoulsComponent,
    BloodOfTheDragonComponent,
    PhantomsOfTheHighSeasComponent,
    GrimmTalesComponent,
    BloodOfAngelsComponent,
    CrimsonWinterComponent,
    YouCantPutYourArmsComponent,
    ShadowOfTheRavenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // GlobalNavComponent,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, data: {animation: 'HomePage'}  },
      { path: 'repertorium', component: RepertoriumComponent, data: {animation: 'RepertoriumPage'}  },
      { path: '',   redirectTo: '/repertorium', pathMatch: 'full' },
      { path: 'biography', component: BiographyComponent, data: {animation: 'BiographyPage'} },
      { path: '',   redirectTo: '/biography', pathMatch: 'full' },
      { path: 'correspond', component: ContactComponent, data: {animation: 'ContactPage'}  },
      { path: '',   redirectTo: '/correspond', pathMatch: 'full' },
      { path: 'grey-cardinal', component: GreyCardinalComponent, data: {animation: 'MusicItemPage'} },
      { path: '',   redirectTo: '/grey-cardinal', pathMatch: 'full' },
      { path: 'lonesome-town', component: LonesomeTownComponent, data: {animation: 'MusicItemPage'} },
      { path: '',   redirectTo: '/lonesome-town', pathMatch: 'full' },
      { path: 'you-cant-put-your-arms-around-a-memory', component: YouCantPutYourArmsComponent, data: {animation: 'MusicItemPage'} },
      { path: '',   redirectTo: '/you-cant-put-your-arms-around-a-memory', pathMatch: 'full' },
      { path: 'darklore-manor', component: DarkloreManorComponent, data: {animation: 'MusicItemPage'} },
      { path: '',   redirectTo: '/darklore-manor', pathMatch: 'full' },
      { path: 'necronomicon', component: NecronomiconComponent, data: {animation: 'MusicItemPage'} },
      { path: '',   redirectTo: '/necronomicon', pathMatch: 'full' },
      { path: 'winters-knight', component: WintersKnightComponent, data: {animation: 'MusicItemPage'} },
      { path: '',   redirectTo: '/winters-knight', pathMatch: 'full' },
      { path: 'transylvania', component: TransylvaniaComponent, data: {animation: 'MusicItemPage'} },
      { path: '',   redirectTo: '/transylvania', pathMatch: 'full' },
      { path: 'carnival-of-lost-souls', component: CarnivalOfLostSoulsComponent, data: {animation: 'MusicItemPage'} },
      { path: '',   redirectTo: '/carnival-of-lost-souls', pathMatch: 'full' },
      { path: 'blood-of-the-dragon', component: BloodOfTheDragonComponent, data: {animation: 'MusicItemPage'} },
      { path: '',   redirectTo: '/blood-of-the-dragon', pathMatch: 'full' },
      { path: 'blood-of-angels', component: BloodOfAngelsComponent, data: {animation: 'MusicItemPage'} },
      { path: '',   redirectTo: '/blood-of-angels', pathMatch: 'full' },
      { path: 'shadow-of-the-raven', component: ShadowOfTheRavenComponent, data: {animation: 'MusicItemPage'} },
      { path: '',   redirectTo: '/shadow-of-the-raven', pathMatch: 'full' },
      { path: 'grimm-tales', component: GrimmTalesComponent, data: {animation: 'MusicItemPage'} },
      { path: '',   redirectTo: '/grimm-tales', pathMatch: 'full' },
      { path: 'phantoms-of-the-high-seas', component: PhantomsOfTheHighSeasComponent, data: {animation: 'MusicItemPage'} },
      { path: '',   redirectTo: '/phantoms-of-the-high-seas', pathMatch: 'full' },
      { path: 'crimson-winter', component: CrimsonWinterComponent, data: {animation: 'MusicItemPage'} },
      { path: '',   redirectTo: '/crimson-winter', pathMatch: 'full' },
      // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
