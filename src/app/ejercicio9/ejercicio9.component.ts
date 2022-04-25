import { Component, OnInit } from '@angular/core';
import {interval, fromEvent, subscribeOn} from "rxjs";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-ejercicio9',
  templateUrl: './ejercicio9.component.html',
  styleUrls: ['./ejercicio9.component.css']
})
export class Ejercicio9Component implements OnInit {
  title="Ejercicio 9";

  constructor() { }

  ngOnInit(): void {
    fromEvent(document, 'click').pipe(switchMap(()=> interval(1000))).subscribe(console.log);
  }

}
