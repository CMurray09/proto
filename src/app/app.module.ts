import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import {FormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { VideoComponent } from './video/video.component';
import {HttpClientModule} from "@angular/common/http";
import { VideoIdComponent } from './video-id/video-id.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    VideoComponent,
    VideoIdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
