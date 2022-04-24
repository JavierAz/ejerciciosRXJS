import { Component, OnInit } from '@angular/core';
import {interval} from "rxjs";
import {bufferTime} from "rxjs/operators";

@Component({
  selector: 'app-ejercicio8',
  templateUrl: './ejercicio8.component.html',
  styleUrls: ['./ejercicio8.component.css']
})
export class Ejercicio8Component implements OnInit {
  title="Ejercicio 8"
  constructor() { }

  ngOnInit(): void {
    const tiempo =interval(500);

    const buffer = tiempo.pipe(bufferTime(2000, 1000))

    const subs = buffer.subscribe(value => console.log('Buffer', value))
  }

}
