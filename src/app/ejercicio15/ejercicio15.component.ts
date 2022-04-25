import {Component, OnInit} from '@angular/core';
import {from, Subject, ConnectableObservable, interval} from "rxjs";
import {tap, multicast} from "rxjs/operators";

@Component({
  selector: 'app-ejercicio15',
  templateUrl: './ejercicio15.component.html',
  styleUrls: ['./ejercicio15.component.css']
})
export class Ejercicio15Component implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    const src = interval(3000).pipe(
      tap((n) => console.log('ID: ' + n))
    )

    const multi = src.pipe(multicast(() => new Subject())) as ConnectableObservable<any>

    multi.subscribe(value => console.log('localhost:4200/' + value))
    multi.subscribe(value => console.log('localhost:4200/' + (value-1)))

    multi.connect()
  }

}
