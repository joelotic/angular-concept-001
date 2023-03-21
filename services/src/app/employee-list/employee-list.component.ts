import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  template: `
    <h2>Employee List</h2>
     <ul *ngFor="let employee of employees" >
      <li>{{employee.id}}</li>
      <li>{{employee.name}}</li>
      <li>{{employee.age}}</li>
     </ul>
  `,
  styles: []
})
export class EmployeeListComponent  implements OnInit{

  public employees: Array<any> = []

  constructor(private _employeeService: EmployeeService){}
  ngOnInit(): void {
    this.employees = this._employeeService.getEmployees();
    
  }

}
