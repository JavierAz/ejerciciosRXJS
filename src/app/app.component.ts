import { Component, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'component-app';

  constructor() {}

  public ngOnInit(): void {
    const contador = interval(1000*10);

    contador.subscribe((x) => {
      console.log(`Cada ${x} segundo`);
    });
  }
}
