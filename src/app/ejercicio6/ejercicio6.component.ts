import { Component, OnInit } from '@angular/core';
import {concat, interval, range} from "rxjs";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-ejercicio6',
  templateUrl: './ejercicio6.component.html',
  styleUrls: ['./ejercicio6.component.css']
})
export class Ejercicio6Component implements OnInit {
  title="Ejercicio 6"
  constructor() { }

  ngOnInit(): void {
    const tiempo = interval(1000).pipe(take(4));
    const rango = range(1,10);

    const rs = concat(tiempo, rango);

    rs.subscribe(value => console.log(value))
  }

}
