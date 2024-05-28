import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{counter}}</h3>

    <button (click) = "increaseBy(+1)">+1</button>
    <button (click) = "resetCounter()">Reset</button>
    <button (click) = "increaseBy(-1)">-1</button>
  `
})

export class CounterComponent {
  constructor() { }

  public counter : number = 0;

  increaseBy( value : number ) : void {

    if(this.counter + value >= 0){
      this.counter += value;
    }
  }

  resetCounter() {
    this.counter = 0;
  }
}
