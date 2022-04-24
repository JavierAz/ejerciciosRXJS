import { Component, OnInit } from '@angular/core';
import {tap} from "rxjs";
import {fromEvent} from "rxjs";

@Component({
  selector: 'app-ejercicio4',
  templateUrl: './ejercicio4.component.html',
  styleUrls: ['./ejercicio4.component.css']
})
export class Ejercicio4Component implements OnInit {
  title="Ejercicio 4"
  constructor() { }

  ngOnInit(): void {
    const clicks = fromEvent(document, 'click');
    const positions = clicks.pipe(
      tap(ev => console.log(`Procesado ` + ev),
        err => console.log(err),
        () =>console.log('Completado')
      )
    );

    positions.subscribe(pos=>console.log(pos));
  }

}
