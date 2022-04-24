import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyfromEventComponent } from './myfrom-event/myfrom-event.component'
import { Ejercicio3Component} from './ejercicio3/ejercicio3.component'

const routes: Routes = [
  {path: 'ejercicio2', component: MyfromEventComponent},
  {path: 'ejercicio3', component: Ejercicio3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
