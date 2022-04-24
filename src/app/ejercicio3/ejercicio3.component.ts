import {Component, OnInit} from '@angular/core';
import {pipe, of} from "rxjs";
import {map, filter} from "rxjs/operators";

@Component({
  selector: 'app-ejercicio3',
  templateUrl: './ejercicio3.component.html',
  styleUrls: ['./ejercicio3.component.css']
})
export class Ejercicio3Component implements OnInit {
  title = "Ejercicio 3";

  constructor() {
  }

  ngOnInit(): void {
    const nums = of(1, 2, 3, 4, 5);

    const sqrt = pipe(
      filter((n: number) => n % 2 === 0),
      map(n => n * n)
    );

    const cuadrado = sqrt(nums);

    cuadrado.subscribe(x => console.log(x))
  }

}
