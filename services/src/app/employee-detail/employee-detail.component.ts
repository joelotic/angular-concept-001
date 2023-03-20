import { Component, OnInit } from '@angular/core';

@Component({
  template: `
  <h2>Employee List</h2>
   <ul *ngFor="let Employee of employees" >
    <li>{{Employee.id}}</li>
    <li>{{Employee.name}}</li>
    <li>{{Employee.age}}</li>
   </ul>
`,
styles: []
})
export class EmployeeDetailComponent implements OnInit {

  public employees = []
  constructor(){}
  ngOnInit(): void {
    
  }
}
