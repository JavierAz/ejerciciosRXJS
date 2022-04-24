import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable, observable} from "rxjs";

@Component({
  selector: 'app-ejercicio7',
  templateUrl: './ejercicio7.component.html',
  styleUrls: ['./ejercicio7.component.css']
})
export class Ejercicio7Component implements OnInit {
  title = "Ejercicio 7"

  constructor() {
  }

  ngOnInit(): void {
    const obs = Observable.create(function (observer: { next: (arg0: number) => void; complete: () => void; }) {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();
    });

    const subs = obs.subscribe({
      next: (x: string) => console.log('El siguiente valor es' + x),
      error: (err: string) => console.log('Error' + err),
      complete: () => console.log('Suscripcion completa'),
    })

    subs.unsubscribe();
  }

  public ngOnDestroy(): void {
  }

}
