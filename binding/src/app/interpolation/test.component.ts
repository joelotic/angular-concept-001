import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  // templateUrl: './test.component.html',
  // styleUrls: ['./test.component.css']
  template: ` 
    <h2>
        Welcome {{name}}
    </h2>
    <h2>{{2+2}}</h2>
    <h2>{{"Welcome in here: " + name}}
    <h2>{{"Name length:" + name.length}}
    <h2>{{"Name Uppercase: " +name.toLocaleUpperCase()}}
    <h2>{{"Name Lowercase: " +name.toLowerCase()}}
    <h2> {{greetUser()}}
    <h2>{{"site Url: " + siteUrl}}
  `,
  styles: [],
})
export class TestComponent implements OnInit {
  public name = 'Joel Otic';
  public siteUrl = window.location.href

  constructor() {}
  ngOnInit() {}

  greetUser(){
    return "Hello greet user : " + this.name;
  }

}
