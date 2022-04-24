import { Component, OnInit } from '@angular/core';
import {timer} from 'rxjs'
import {tap, mapTo, share} from "rxjs";

@Component({
  selector: 'app-ejercicio5',
  templateUrl: './ejercicio5.component.html',
  styleUrls: ['./ejercicio5.component.css']
})
export class Ejercicio5Component implements OnInit {
  title="Ejercicio 5"
  constructor() { }

  ngOnInit(): void {
    const tiempo = timer(100);

    const obs = tiempo.pipe(
      tap(()=> console.log('Tap On')),
      mapTo('End')
    );

    const sub1 = obs.subscribe(value => console.log(value));
    const sub2 = obs.subscribe(value => console.log(value));

    const shareObs = obs.pipe(share());

    console.log('Share On');
    const sub3 = shareObs.subscribe(value => console.log(value))
    const sub4 = shareObs.subscribe(value => console.log(value))
  }

}
