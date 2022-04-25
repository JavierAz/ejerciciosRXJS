import {Component, OnInit} from '@angular/core';
import {scan, of, delay} from "rxjs";

@Component({
  selector: 'app-ejercicio13',
  templateUrl: './ejercicio13.component.html',
  styleUrls: ['./ejercicio13.component.css']
})
export class Ejercicio13Component implements OnInit {
  title = "Ejercicio 13"

  constructor() {
  }

  ngOnInit(): void {
    const src = of(1, 2, 3, 4, 5).pipe(delay(1000));
    // @ts-ignore
    const scanObs = src.pipe(scan((a, c) => [...a,c],[]))

    scanObs.subscribe(value => console.log(value));
  }

}
