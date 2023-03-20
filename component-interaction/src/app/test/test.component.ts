import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <div>
      <h2>
        {{name}}
        <br>
        <button (click)="fireEvent()">get-child-event</button>
      </h2>  
    <div>
    <div>******* Pipe *******</div>
    <div>
    <div>******* string Pipe *******</div>
      <h2>lowercase: {{name | lowercase}}</h2>
      <h2>uppercase: {{name | uppercase}}</h2>
      <h2>titlecase: {{name | titlecase}}</h2>
      <h2>slice:position0 range3 {{name | slice:0:3}}</h2>
      <h2>json format: <br>{{person | json}}</h2>
      <br>
      <div>******* number Pipe *******</div>
      <h2>{{4.123 | number: '1.2-3'}}</h2>
      <h2>{{4.123 | number: '6.4-6'}}</h2>
      <h2>{{4.125 | number: '7.1-2'}}</h2>
      <div>******* percent Pipe *******</div>
      <h2>{{5.44 | percent}}</h2>
      <div>******* currency Pipe *******</div>
      <h2>{{5.44 | currency}}</h2>
      <h2>{{5.44 | currency: 'PHP' : 'code'}}</h2>
      <div>******* date Pipe *******</div>
      <h2>{{ myDate | date:'d'}}/{{ myDate | date:'MM'}}/{{ myDate | date:'y'}}</h2>
      <h2>{{myDate | date: 'short'}}</h2>
      <h2>{{myDate | date: 'shortDate'}}</h2>
      <h2>{{myDate | date: 'shortTime'}}</h2>
      <h2>{{myDate | date: "dd.MM.yyyy" }}</h2>
      <!-- <h2>{{}}</h2> -->
      <!-- <h2>{{}}</h2> -->
      <!-- <h2>{{}}</h2> -->
    </div>
  `,
  styles: []
})
export class TestComponent implements OnInit {
  @Input('parentData') public name: any
  @Output() public childEvent = new EventEmitter
  public person =[ 
    {"id": 1, "name": "John1", "age": 21},
    {"id": 2, "name": "John2", "age": 22},
    {"id": 3, "name": "John3", "age": 23},
    {"id": 4, "name": "John4", "age": 24}
  ]
  public myDate= Date.now()

  constructor(){}
  ngOnInit(): void {
    
  }
  fireEvent(){
    this.childEvent.emit("data coming from child component to parent")
  }
}
