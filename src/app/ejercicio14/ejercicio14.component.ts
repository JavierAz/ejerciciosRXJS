import {Component, OnInit} from '@angular/core';
import {Subject} from "rxjs";

@Component({
  selector: 'app-ejercicio14',
  templateUrl: './ejercicio14.component.html',
  styleUrls: ['./ejercicio14.component.css']
})
export class Ejercicio14Component implements OnInit {
  title = "Ejercicio 14"

  constructor() {
  }

  ngOnInit(): void {
    const sub = new Subject<number>();

    sub.subscribe({
      next: (n) => console.log(`ObsA: ${n}`)
    })
    sub.subscribe({
      next: (n) => console.log(`ObsB: ${n + 1}`)
    })
    sub.next(1)
    sub.next(2)
  }

}
