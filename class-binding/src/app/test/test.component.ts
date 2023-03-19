import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
   <h3>********** Class Binding Start Here **********</h3>
    <h2 [class]="textSpecial">Welcome : {{name}}</h2>
    <h2 class="text-success">Joel Class Binding</h2>
    <h2 [class.text-danger]="hasError">Danger Code</h2>
    <h2 [ngClass]="messageClass" > message Class</h2>
    <h3>********** Style Binding Start Here **********</h3>

    <h3>********** Style Binding End Here **********</h3>
    <h2 [style.color]="hasError ? 'red' : 'green' " >Style Binding is {{hasError}}</h2>
    <h2 [style.color]="highlightColor">Highlight Text Color</h2>
    <h2 [ngStyle]="titleStyles">title Styles</h2>
  `,
  styles: [`
    .text-success{
      color: green;
    }
    .text-danger{
      color: red;
    }
    .text-special{
      font-style: italic;
    }
  
  `]
})
export class TestComponent implements OnInit {

  public name = 'Joel'
  public textSuccess = "text-success"
  public textDanger = "text-danger"
  public textSpecial = "text-special"
  public hasError = true
  public isSpeacial = false
  public messageClass = {
    "text-success": !this.hasError,
    "text-danger":  this.hasError,
    "text-special": this.isSpeacial
  }
  public titleStyles ={
    color: "blue",
    fontStyle: "italic"
  }
  public highlightColor = "blue"

  constructor(){}
  ngOnInit(): void {
    
  }
}
