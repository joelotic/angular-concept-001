import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>Welcome : {{name}}</h2>
    <input [id]=myId type="text" value="Joel Inputbox">
    <input [disabled]="isDisabled" id={{myId}} type="text" value="Joel Inputbox2">
    <input bind-disabled="isDisabled" id={{myId}} type="text" value="Joel Inputbox3">
  `,
  styles: []
})
export class TestComponent implements OnInit{
  public name = "Joel-property-binding-page"
  public myId = "testId"
  public isDisabled = false;

  constructor(){}
  ngOnInit(){}

}
