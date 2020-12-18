import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { MapComponent } from './map/map.component';
import { StorageService } from "../services/storage.service";
import { SignupComponent } from './signup/signup.component';
import { SessionbarComponent } from './sessionbar/sessionbar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingpageComponent,
    MapComponent,
    SignupComponent,
    SessionbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
