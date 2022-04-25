import { Component, OnInit } from '@angular/core';
import {concatMap, of} from 'rxjs'
import {concat, delay} from "rxjs/operators";

@Component({
  selector: 'app-ejercicio11',
  templateUrl: './ejercicio11.component.html',
  styleUrls: ['./ejercicio11.component.css']
})
export class Ejercicio11Component implements OnInit {
  title="Ejercicio 11";
  constructor() { }

  ngOnInit(): void {
    const source=of(2000, 1000, 3000);

    const obsConcatMap=source.pipe(
      concatMap(value => of(`Valor: ${value}`).pipe(delay(value)))
    )

    obsConcatMap.subscribe(
      value => console.log(value)
    )
  }

}
