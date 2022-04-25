import { Component, OnInit } from '@angular/core';
import {delay, take} from "rxjs";
import {forkJoin, of, interval} from "rxjs";

@Component({
  selector: 'app-ejercicio10',
  templateUrl: './ejercicio10.component.html',
  styleUrls: ['./ejercicio10.component.css']
})
export class Ejercicio10Component implements OnInit {
  title="Ejercicio 10"
  constructor() { }

  ngOnInit(): void {
     const fork=forkJoin(
       of('Hola'),
       of('Mundo').pipe(delay(500)),
       interval(1000).pipe(take(2))
     );

     fork.subscribe(value => console.log(value))
  }

}
