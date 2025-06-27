import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import{FormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http'
import { ResidenceComponent } from './residence/residence.component';
import { DetailsComponent } from './details/details.component';
import { AppRoutingModule } from './app.routing.module'
import {RouterModule, Routes} from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component'




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ResidenceComponent,
    DetailsComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
   
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
