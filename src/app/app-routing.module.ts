import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyfromEventComponent } from './myfrom-event/myfrom-event.component'

const routes: Routes = [
  {path: 'ejercicio2', component: MyfromEventComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
