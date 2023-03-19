import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>Welcome : {{name}}</h2>
    <button (click)="onClick($event)" >Greet</button>
    <button (click)="greeting='Welcome Joel'" >Greet Click</button>
    {{greeting}}

  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name ="Joel Code"
  public greeting = ""
  constructor(){}
  ngOnInit(): void {
    
  }
  onClick(event: MouseEvent){
    console.log(event)
    this.greeting = event.type
  }

}
