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



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RepertoriumComponent,
    BiographyComponent,
    ContactComponent,
    GlobalNavComponent,
    GreyCardinalComponent,
    TransportControlComponent
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
      { path: 'contact', component: ContactComponent, data: {animation: 'ContactPage'}  },
      { path: '',   redirectTo: '/contact', pathMatch: 'full' },
      { path: 'grey-cardinal', component: GreyCardinalComponent, data: {animation: 'MusicItemPage'} },
      { path: '',   redirectTo: '/grey-cardinal', pathMatch: 'full' },
      // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
