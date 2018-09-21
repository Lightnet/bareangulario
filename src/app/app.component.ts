// app.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>{{title}}</h1>
      <div>The number: {{x}}</div>
      <app-home></app-home>
      <button (click)="test()">test</button>
    </div>
  `,
})

export class AppComponent {

  
  title: string = 'Working component!';
  x: number = 123;

  test(){
    console.log("test click");
  }
}