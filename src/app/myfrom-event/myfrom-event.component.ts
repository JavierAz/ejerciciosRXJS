import { Component, OnInit } from '@angular/core';
import {fromEvent} from "rxjs";

@Component({
  selector: 'app-myfrom-event',
  templateUrl: './myfrom-event.component.html',
  styleUrls: ['./myfrom-event.component.css']
})
export class MyfromEventComponent implements OnInit {
  title = "Segundo Ejercicio"
  constructor() { }

  ngOnInit(): void {
    const el = document.getElementById('elemento');

    // @ts-ignore
    const mouseMove = fromEvent(el, 'mousemove');

    mouseMove.subscribe((el: any) => {
      console.log(`Coordenadas: x-> ${el.clientX} , y-> ${el.clientY}`)
    });
  }

}
