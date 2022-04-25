import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyfromEventComponent } from './ejercicio2/myfrom-event.component';
import { Ejercicio3Component } from './ejercicio3/ejercicio3.component';
import { Ejercicio4Component } from './ejercicio4/ejercicio4.component';
import { Ejercicio5Component } from './ejercicio5/ejercicio5.component';
import { Ejercicio6Component } from './ejercicio6/ejercicio6.component';
import { Ejercicio7Component } from './ejercicio7/ejercicio7.component';
import { Ejercicio8Component } from './ejercicio8/ejercicio8.component';
import { Ejercicio9Component } from './ejercicio9/ejercicio9.component';
import { ContadorComponent } from './contador/contador.component';
import { Ejercicio10Component } from './ejercicio10/ejercicio10.component';
import { Ejercicio11Component } from './ejercicio11/ejercicio11.component';

@NgModule({
  declarations: [
    AppComponent,
    MyfromEventComponent,
    Ejercicio3Component,
    Ejercicio4Component,
    Ejercicio5Component,
    Ejercicio6Component,
    Ejercicio7Component,
    Ejercicio8Component,
    Ejercicio9Component,
    ContadorComponent,
    Ejercicio10Component,
    Ejercicio11Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
