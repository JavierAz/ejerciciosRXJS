import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyfromEventComponent } from './myfrom-event/myfrom-event.component';
import { Ejercicio3Component } from './ejercicio3/ejercicio3.component';
import { Ejercicio4Component } from './ejercicio4/ejercicio4.component';
import { Ejercicio5Component } from './ejercicio5/ejercicio5.component';
import { Ejercicio6Component } from './ejercicio6/ejercicio6.component';
import { Ejercicio7Component } from './ejercicio7/ejercicio7.component';

@NgModule({
  declarations: [
    AppComponent,
    MyfromEventComponent,
    Ejercicio3Component,
    Ejercicio4Component,
    Ejercicio5Component,
    Ejercicio6Component,
    Ejercicio7Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
