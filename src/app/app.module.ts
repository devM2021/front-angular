import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login/login.component';
import { SignupComponent } from './signup/signup/signup.component';
import { CommentComponent } from './comment/comment/comment.component';
import { VehicleComponent } from './vehicles/vehicle/vehicle.component';
import { DetailComponent } from './vehicles/detail/detail/detail.component';
@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent, SignupComponent, CommentComponent, VehicleComponent, DetailComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
