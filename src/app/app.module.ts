import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './../material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NewsServiceService } from './service/news-service.service';
import {HttpClientModule} from '@angular/common/http';
import { ContentComponent } from './content/content.component';
import { NewsComponent } from './news/news.component' ;

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule ,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [NewsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
