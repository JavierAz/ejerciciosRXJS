import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MyfromEventComponent} from './myfrom-event/myfrom-event.component'
import {Ejercicio3Component} from './ejercicio3/ejercicio3.component'
import {Ejercicio4Component} from "./ejercicio4/ejercicio4.component";
import {Ejercicio5Component} from "./ejercicio5/ejercicio5.component";
import {Ejercicio6Component} from "./ejercicio6/ejercicio6.component";
import {Ejercicio7Component} from "./ejercicio7/ejercicio7.component";

const routes: Routes = [
  {path: 'ejercicio2', component: MyfromEventComponent},
  {path: 'ejercicio3', component: Ejercicio3Component},
  {path: 'ejercicio4', component: Ejercicio4Component},
  {path: 'ejercicio5', component: Ejercicio5Component},
  {path:'ejercicio6', component: Ejercicio6Component},
  {path:'ejercicio7', component: Ejercicio7Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
