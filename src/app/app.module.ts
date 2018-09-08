import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { BottomComponent } from './bottom/bottom.component';
import { MiddleComponent } from './middle/middle.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    BottomComponent,
    MiddleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
