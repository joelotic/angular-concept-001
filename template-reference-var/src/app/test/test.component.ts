import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>Welcome : {{name}}</h2>
    <input #myInput  type="text"> 
    <button (click)="logMessage(myInput.value)"> Log </button>
    
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = "Joel Code"
  constructor(){}
  ngOnInit(): void {
    
  }

  logMessage(value: any){
    console.log(value)
  }

}
