import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatButtonModule } from '@angular/material/button'; 
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCarouselModule } from '@ngmodule/material-carousel';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UpdatesComponent } from './updates/updates.component';
import { ContactComponent } from './contact/contact.component';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    UpdatesComponent,
    ContactComponent
  ],
  imports : [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
	MatButtonModule,
	MatToolbarModule,
	MatIconModule,
	MatMenuModule,
	FlexLayoutModule,
	MatCarouselModule.forRoot(),
	MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
