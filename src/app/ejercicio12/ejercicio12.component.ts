import { Component, OnInit } from '@angular/core';
import {mergeMap, of} from "rxjs";
import {delay} from "rxjs/operators";

@Component({
  selector: 'app-ejercicio12',
  templateUrl: './ejercicio12.component.html',
  styleUrls: ['./ejercicio12.component.css']
})
export class Ejercicio12Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const source=of(2000, 1000, 3000);

    const obsMergeMap=source.pipe(
      mergeMap(value => of(`Valor: ${value}`).pipe(delay(value)))
    )

    obsMergeMap.subscribe(
      value => console.log(value)
    )
  }

}
