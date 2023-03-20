import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>Welcome : {{name}}</h2>
    <input #myInput  type="text">
    <button (click)="logMessage(myInput.value)"> Log </button>
    <h2> button click inpute is : {{input}} </h2>
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = "Joel Code"
  public input =""
  constructor(){}
  ngOnInit(): void {

  }

  logMessage(value: any){
    console.log(value)
    this.input = value
  }

}
