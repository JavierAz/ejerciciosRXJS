import {Component, OnInit} from '@angular/core';
import {interval, fromEvent, merge, empty} from "rxjs";
import {switchMap, scan, takeWhile, startWith, mapTo} from "rxjs";

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
  title = "Ejemplo real"

  constructor() {
  }

  ngOnInit(): void {
    const remainingLabel = document.getElementById('remaining');
    const pauseBtn = document.getElementById('pause');
    const resumeBtn = document.getElementById('resume');

    const obsInterval = interval(1000).pipe(mapTo(-1));
    // @ts-ignore
    const pause = fromEvent(pauseBtn, 'click').pipe(mapTo(false));
    // @ts-ignore
    const resume = fromEvent(resumeBtn, 'click').pipe(mapTo(true));

    const timer = merge(pause, resume).pipe(
      startWith(true),
      switchMap(value => (value ? obsInterval : empty())),
      scan((acc, curr) => (curr ? curr + acc : acc), 10),
      takeWhile(v => v >= 0)
    )
      // @ts-ignore
    timer.subscribe((val: any) => remainingLabel.innerHTML = val)
  }

}
