import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyfromEventComponent } from './myfrom-event/myfrom-event.component';
import { Ejercicio3Component } from './ejercicio3/ejercicio3.component';

@NgModule({
  declarations: [
    AppComponent,
    MyfromEventComponent,
    Ejercicio3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
